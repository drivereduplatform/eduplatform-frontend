import Notification from '../Notification'
import cookie from 'universal-cookie'
import apilib from '../../apilib'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function setSessionIDCookie(sessionID, cookies) {
    cookies.set('sessionID', sessionID, {
        path: '/',
        maxAge: 3600 * 24 * 365 * 100
    })
}

function StepOne({ language, setStep }) {

    const cookies = new cookie()

    const navigate = useNavigate()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [requestResult, setRequestResult] = useState({})
    const [notificationText, setNotificationText] = useState('')

    const NOTIFICATION_TIMING = 5000

    function setNotification(text) {
        setNotificationText(text)
        setTimeout(() => {
            setNotificationText('')
        }, NOTIFICATION_TIMING + 1000)
    }

    function loginRequest(e) {
        e.preventDefault()
        setRequestResult({})
        if (username && password) {
            apilib.account.login(username, password)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    const { sessionID, message } = response.data
                    if (message === 'Login successful') {
                        setRequestResult({ message: language.notification.successfulLogin, success: true })
                    }
                    if (checkbox) {
                        setSessionIDCookie(sessionID, cookies)
                    }
                    setStep(1)
                    setUsername('')
                    setPassword('')
                    setCheckbox(false)
                    navigate('/dashboard')
                } else {
                    if (response.data.message === 'Missing fields') {
                        setRequestResult({ message: language.notification.missingFields, success: false })
                        setNotification(language.notification.missingFields)
                    }
                    if (response.data.message === 'User not found') {
                        setRequestResult({ message: language.notification.userNotFound, success: false })
                        setNotification(language.notification.missingFields)
                    }
                    if (response.data.message === 'Incorrect password') {
                        setRequestResult({ message: language.notification.incorrectPassword, success: false })
                        setNotification(language.notification.missingFields)
                    }
                }
            })
            .catch(error => {
                console.error(error)
                setNotification(language.notification.serverIsNotAvailable)
            })
        } else {
            setRequestResult({ message: language.notification.missingFields, success: false })
            setNotification(language.notification.missingFields)
        }
    }

    console.log(requestResult);

    return (
        <>
            <section className="login">
                <div className="container">
                    <div className="login-inner inner">
                        <div className="login-title title">
                            <h1>{language.login.stepOne.title}</h1>
                        </div>
                        <form onSubmit={(e) => loginRequest(e)} className="login-form">
                            <div className="login-form-input">
                                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={language.login.stepOne.inputs.username} type="text" />
                            </div>
                            <div className="login-form-input">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={language.login.stepOne.inputs.password} type="password" />
                            </div>
                            <div className="login-form-checkbox note">
                                <input onChange={() => setCheckbox(!checkbox)} type="checkbox" /> <div className="login-form-checkbox-indicator"></div><p>{language.login.stepOne.buttons.rememberMe}</p>
                            </div>
                            <button onClick={(e) => loginRequest(e)} className="login-form-button">{language.login.stepOne.buttons.login}</button>
                            <Link to="/register" className="login-form-note note">
                                <p>{language.login.stepOne.buttons.dontHaveAccount}</p>
                            </Link>
                        </form>
                    </div>
                </div >
            </section>
            <Notification language={language} log={notificationText} timing={NOTIFICATION_TIMING} />
        </>
    )
}

export default StepOne;

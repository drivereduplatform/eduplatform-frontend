import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import api from '../../configs/api'
import Notification from '../Notification'
import cookie from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

function StepOne({ language, setStep }) {

    const cookies = new cookie()

    const history = useNavigate()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [requestResult, setRequestResult] = useState({})

    function loginRequest(e) {
        e.preventDefault()
        setRequestResult({})
        axios.post(`${api.api_url}/account/login`, {
            username: username,
            password: password
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Login successful') {
                    setRequestResult({ message: language.notification.successfulLogin, success: true })
                }
                if (checkbox) {
                    cookies.set('sessionID', response.data.sessionID, {
                        path: '/',
                        maxAge: 3600 * 24 * 265 * 100
                    })
                }
                setStep(1)
                setUsername('')
                setPassword('')
                setCheckbox(false)
                history('/dashboard')
            } else {
                if (response.data.message === 'Missing fields') {
                    setRequestResult({ message: language.notification.missingFields, success: false })
                }
                if (response.data.message === 'User not found') {
                    setRequestResult({ message: language.notification.userNotFound, success: false })
                }
                if (response.data.message === 'Incorrect password') {
                    setRequestResult({ message: language.notification.incorrectPassword, success: false })
                }
            }
        })
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
            <Notification language={language} log={requestResult.message} timing={5000} />
        </>
    )
}

export default StepOne;

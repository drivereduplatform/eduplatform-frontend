import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'
import Notification from "../Notification";

function StepOne({ language, setStep, setCookie }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [requestResult, setRequestResult] = useState({})

    function registerRequest(e) {
        e.preventDefault()
        setRequestResult({})
        axios.post(`${api.api_url}/account/register`, {
            username: username,
            email: email,
            password: password,
            // confirmPassword: confirmPassword,
            lang: language.lang
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Registration successful') {
                    setRequestResult({ message: language.notification.successfulRegister, success: true })
                }
                setCookie(response.data.sessionID)
                setUsername('')
                setPassword('')
                setConfirmPassword('')
                setEmail('')
                setStep(2)
            } else {
                if (response.data.message === 'Username already exists') {
                    setRequestResult({ message: language.notification.usernameAlreadyExists, success: false })
                }
                if (response.data.message === 'Email already exists') {
                    setRequestResult({ message: language.notification.emailAlreadyExists, success: false })
                }
            }
        }).catch(error => {
            setRequestResult({ message: language.notification.serverIsNotAvailable, success: false })
        })
    }

    return (
        <>
            <section className="register">
                <div className="container">
                    <div className="register-inner inner">
                        <div className="register-title title">
                            <h1>{language.register.stepOne.title}</h1>
                        </div>
                        <form onSubmit={(e) => registerRequest(e)} className="register-form">
                            <div className="register-form-input">
                                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={language.register.stepOne.inputs.username} type="text" />
                            </div>
                            <div className="register-form-input">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={language.register.stepOne.inputs.email} type="text" />
                            </div>
                            <div className="register-form-input">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={language.register.stepOne.inputs.password} type="password" />
                            </div>
                            <div className="register-form-input">
                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder={language.register.stepOne.inputs.confirmPassword} type="password" />
                            </div>
                            <button onClick={(e) => registerRequest(e)} className="register-form-button">{language.register.stepOne.buttons.register}</button>
                            <div className="login-form-note">
                                <Link to="/login" className="note">
                                    <p>{language.register.stepOne.buttons.alreadyHaveAccount}</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Notification language={language} log={requestResult.message} timing={5000} />
        </>
    )
}

export default StepOne;
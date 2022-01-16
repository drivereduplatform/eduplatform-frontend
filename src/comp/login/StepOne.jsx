import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'

function StepOne({ language, setStep }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    function loginRequest(e) {
        e.preventDefault()
        axios.post(`${api.api_url}/login`, {
            username: username,
            password: password
        }).then(response => {
            console.log(response);
        })
        setStep(1)
        setUsername('')
        setPassword('')
        setCheckbox('')
    }

    return (
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
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={language.login.stepOne.inputs.password} type="text" />
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
            </div>
        </section>
    )
}

export default StepOne;
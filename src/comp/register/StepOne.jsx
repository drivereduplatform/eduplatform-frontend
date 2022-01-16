import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'

function StepOne({ language, setStep }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [lang, setLang] = useState('')


    function registerRequest(e) {
        setLang(language)
        e.preventDefault()
        if (password === confirmPassword) {
            axios.post(`${api.api_url}/register`, {
                username: username,
                email: email,
                password: password,
                lang: lang
            }).then(response => {
                console.log(response);
            })
        } else {
            // notification error
        }
        // то что снизу должно делатся поссле респонс саксес если что но пока так
        setStep(2)
        setUsername('')
        setPassword('')
        setEmail('')
        setConfirmPassword('')
    }

    return (
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
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={language.register.stepOne.inputs.password} type="text" />
                        </div>
                        <div className="register-form-input">
                            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder={language.register.stepOne.inputs.confirmPassword} type="text" />
                        </div>
                        <button onClick={(e) => registerRequest(e)} className="register-form-button">{language.register.stepOne.buttons.register}</button>
                        <Link to="/login" className="register-form-note note">
                            <p>{language.register.stepOne.buttons.alreadyHaveAccount}</p>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StepOne;
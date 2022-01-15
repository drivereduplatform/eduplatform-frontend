import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'

function Main({ language, setSteps }) {

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
    }

    return (
        <section className="login">
            <div className="container">
                <div className="login-inner inner">
                    <div className="login-title title">
                        <h1>{language.login.title}</h1>
                    </div>
                    <form onSubmit={(e) => loginRequest(e)} className="login-form">
                        <div className="login-form-input">
                            <input onChange={(e) => setUsername(e.target.value)} placeholder={language.login.inputs.username} type="text" />
                        </div>
                        <div className="login-form-input">
                            <input onChange={(e) => setPassword(e.target.value)} placeholder={language.login.inputs.password} type="text" />
                        </div>
                        <div className="login-form-checkbox note">
                            <input onChange={() => setCheckbox(!checkbox)} type="checkbox" /> <div className="login-form-checkbox-indicator"></div><p>{language.login.buttons.rememberMe}</p>
                        </div>
                        <button onClick={(e) => loginRequest(e)} className="login-form-button">{language.login.buttons.login}</button>
                        <Link to="/register" className="login-form-note note">
                            <p>{language.login.buttons.dontHaveAccount}</p>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Main;
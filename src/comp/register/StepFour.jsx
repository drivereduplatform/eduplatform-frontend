import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'
import Notification from "../Notification";
import { useNavigate } from "react-router-dom";

function StepFour({ language, setStep, cookie, setCookie }) {

    const history = useNavigate()

    const [lang, setLang] = useState('')
    const [requestResult, setRequestResult] = useState({})
    console.log(lang);

    function langChangeRequest(e) {
        e.preventDefault()
        setRequestResult({})

        axios.post(`${api.api_url}/account/change-lang`, {
            lang: lang,
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Language has been changed successfully') {
                    setRequestResult({ message: language.notification.successfulLangChange, success: true })
                }
                setLang('')
                setStep(1)
                history('/login')
                setCookie('')
            } else {
                if (response.data.message === 'Session not found') {
                    setRequestResult({ message: language.notification.sessionNotFound, success: false })
                }
            }
        })
    }

    return (
        <>
            <section className="setup">
                <div className="container">
                    <div className="setup-inner inner">
                        <div className="setup-title title">
                            <h1>{language.register.stepFour.title}</h1>
                        </div>
                        <form onSubmit={(e) => langChangeRequest(e)} action="" className="setup-form">
                            <div className="setup-form-select">
                                <select onChange={(e) => setLang(e.target.value)}>
                                    <option value=''>{language.register.stepFour.inputs.language}</option>
                                    <option value='en'>English</option>
                                    <option value='ru'>Русский</option>
                                    <option value='kk'>Қазақша</option>
                                </select>
                            </div>
                            <button onClick={(e) => langChangeRequest(e)} className="register-form-button">{language.register.stepFour.buttons.done}</button>
                            <div onClick={() => {
                                setStep(1)
                                history('/login')
                                setCookie('')
                            }} className="setup-form-note note">
                                <p>{language.register.stepFour.buttons.skip}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Notification language={language} log={requestResult.message} timing={5000} />
        </>
    )
}

export default StepFour;
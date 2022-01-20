import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'
import Notification from "../Notification";

function StepThree({ language, setStep, cookie }) {

    const [fullname, setFullname] = useState('')
    const [requestResult, setRequestResult] = useState({})

    function fullnameChangeRequest(e) {
        e.preventDefault()
        setRequestResult({})

        axios.post(`${api.api_url}/account/change-fullname`, {
            fullname: fullname,
            sessionID: cookie
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Fullname has been changed successfully') {
                    setRequestResult({ message: language.notification.successfulFullnameChange, success: true })
                }
                setFullname('')
                setStep(4)
            } else {
                if (response.data.message === 'Session not found') {
                    setRequestResult({ message: language.notification.sessionNotFound, success: false })
                }
            }
        }).catch(error => {
            setRequestResult({ message: language.notification.serverIsNotAvailable, success: false })
        })
    }

    return (
        <>
            <section className="setup">
                <div className="container">
                    <div className="setup-inner inner">
                        <div className="setup-title title">
                            <h1>{language.register.stepThree.title}</h1>
                        </div>
                        <form onSubmit={(e) => fullnameChangeRequest(e)} action="" className="setup-form">
                            <div className="setup-form-input">
                                <input onChange={(e) => setFullname(e.target.value)} value={fullname} placeholder={language.register.stepThree.inputs.fullname} type="text" />
                            </div>
                            <button onClick={(e) => fullnameChangeRequest(e)} className="register-form-button">{language.register.stepThree.buttons.done}</button>
                            <div onClick={() => setStep(4)} className="setup-form-note note">
                                <p>{language.register.stepThree.buttons.skip}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Notification language={language} log={requestResult.message} timing={5000} />
        </>
    )
}

export default StepThree;
import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'
import Notification from "../Notification";

function StepTwo({ language, setStep, cookie }) {

    const [img, setImg] = useState('')
    const [previewImg, setPreviewImg] = useState('')
    const [previewUploaded, setPreviewUploaded] = useState(false)
    const [requestResult, setRequestResult] = useState({})

    function imgChangeRequest(e) {
        e.preventDefault()
        setRequestResult({})

        let formData = new FormData()
        formData.append('img', img)
        formData.append('sessionID', cookie)

        axios({
            url: `${api.api_url}/account/change-img`,
            method: 'post',
            data: formData
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                if (response.data.message === 'Image has been changed successfully') {
                    setRequestResult({ message: language.notification.successfulImgChange, success: true })
                }
                setImg('')
                setStep(3)
            } else {
                if (response.data.message === 'Session not found') {
                    setRequestResult({ message: language.notification.sessionNotFound, success: false })
                }
            }
        }).catch(error => {
            setRequestResult({ message: language.notification.serverIsNotAvailable, success: false })
        })
    }

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader()

            reader.onload = function (e) {
                setPreviewImg(e.target.result)
                setPreviewUploaded(true)
            }

            reader.readAsDataURL(e.target.files[0])
        } else {
            setPreviewImg(`${api.api_url}/img/default-avatar.png`)
        }
    }

    return (
        <>
            <section className="setup">
                <div className="container">
                    <div className="setup-inner inner">
                        <div className="setup-title title">
                            <h1>{language.register.stepTwo.title}</h1>
                        </div>
                        <form onSubmit={(e) => imgChangeRequest(e)} action="" className="setup-form">
                            <div className="setup-form-preview">
                                {
                                    previewUploaded ?
                                        <img src={previewImg} alt="" />
                                        :
                                        <img src={`${api.api_url}/uploads/default-avatar.png`} alt="" />
                                }
                                <input onChange={(e) => {
                                    handleImageChange(e)
                                    setImg(e.target.files[0])
                                }} type="file" />
                            </div>
                            <button onClick={(e) => imgChangeRequest(e)} className="register-form-button">{language.register.stepTwo.buttons.done}</button>
                            <div onClick={() => setStep(3)} className="setup-form-note note">
                                <p>{language.register.stepTwo.buttons.skip}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Notification language={language} log={requestResult.message} timing={5000} />
        </>
    )
}

export default StepTwo;
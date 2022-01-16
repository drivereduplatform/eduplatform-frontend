import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'

function StepTwo({ language, setStep }) {

    const [fullname, setFullname] = useState('')
    const [img, setImg] = useState('')
    const [previewImg, setPreviewImg] = useState('')
    const [lang, setLang] = useState('')
    const [previewUploaded, setPreviewUploaded] = useState(false)

    function setupRequest(e) {
        e.preventDefault()
        axios.post(`${api.api_url}/change-fullname`, {
            fullname: fullname,
        }).then(response => {
            console.log(response);
        })
        axios.post(`${api.api_url}/change-img`, {
            img: img,
        }).then(response => {
            console.log(response);
        })
        axios.post(`${api.api_url}/change-lang`, {
            lang: lang,
        }).then(response => {
            console.log(response);
        })
        setStep(1)
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
            setPreviewImg('https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png')
        }
    }

    return (
        <section className="setup">
            <div className="container">
                <div className="setup-inner inner">
                    <div className="setup-title title">
                        <h1>{language.register.stepTwo.title}</h1>
                    </div>
                    <form action="" className="setup-form">
                        <div className="setup-form-preview">
                            {
                                previewUploaded ?
                                    <img src={previewImg} alt="" />
                                    :
                                    <img src="https://www.punchstick.com/wp-content/uploads/2017/12/default-user-image.png" alt="" />
                                //тут должна картинка браться  из апи там где дефолт картинка но я не могу запустить почему то бакенд
                            }
                            <input onChange={(e) => {
                                handleImageChange(e)
                                setImg(e.target.files[0])
                            }} type="file" />
                        </div>
                        <div className="setup-form-input">
                            <input onChange={(e) => setFullname(e.target.value)} value={fullname} placeholder={language.register.stepTwo.inputs.fullname} type="text" />
                        </div>
                        <div className="setup-form-select">
                            <select onChange={(e) => setLang(e)}>
                                <option value=''>{language.register.stepTwo.inputs.language}</option>
                                <option value='en'>English</option>
                                <option value='ru'>Русский</option>
                                <option value='kk'>Қазақша</option>
                            </select>
                        </div>
                        <button onClick={(e) => setupRequest(e)} className="register-form-button">{language.register.stepTwo.buttons.done}</button>
                        <Link to="/login" className="setup-form-note note">
                            <p>{language.register.stepTwo.buttons.skip}</p>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StepTwo;
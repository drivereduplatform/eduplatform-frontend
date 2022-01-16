import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import api from '../../configs/api'

function StepTwo({ language, setStep }) {

    const [fullname, setFullname] = useState('')
    const [img, setImg] = useState('')
    const [lang, setLang] = useState('')

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

    return (
        <section className="setup">
            <div className="container">
                <div className="register-inner inner">
                    <div className="register-title title">
                        <h1>{language.register.stepTwo.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepTwo;
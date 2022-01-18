import { useState } from "react"
import Sidebar from "../comp/register/Sidebar"
import StepOne from "../comp/register/StepOne"
import StepTwo from "../comp/register/StepTwo"
import StepThree from "../comp/register/StepThree"
import lang from "../configs/lang"
import StepFour from "../comp/register/StepFour"

function Register() {

    function languageSelector() {
        const language = window.navigator.language.split("-")[0]
        for (let i = 0; i < lang.length; i++) {
            if (language === lang[i].lang) {
                return i
            }
        }
    }

    const language = lang[languageSelector()]

    const [step, setStep] = useState(1)
    const [cookie, setCookie] = useState('')
    console.log(cookie);

    return (
        <>
            <Sidebar language={language} step={step} />
            <main>
                {
                    step === 1 ?
                        <StepOne setCookie={setCookie} language={language} setStep={setStep} />
                        :
                        step === 2 ?
                            <StepTwo cookie={cookie} language={language} setStep={setStep} />
                            :
                            step === 3 ?
                                <StepThree cookie={cookie} language={language} setStep={setStep} />
                                :
                                step === 4 ?
                                    <StepFour cookie={cookie} language={language} setStep={setStep} setCookie={setCookie} />
                                    :
                                    null
                }
            </main>
        </>
    )
}

export default Register
import { useState } from "react"
import Sidebar from "../comp/register/Sidebar"
import StepOne from "../comp/register/StepOne"
import StepTwo from "../comp/register/StepTwo"
import lang from "../configs/lang"

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
    console.log(step);

    return (
        <>
            <Sidebar language={language} step={step} />
            <main>
                {
                    step === 1 ?
                        <StepOne language={language} setStep={setStep} />
                        :
                        step === 2 ?
                            <StepTwo language={language} setStep={setStep} />
                            :
                            null
                }
            </main>
        </>
    )
}

export default Register
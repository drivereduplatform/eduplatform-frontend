import { useState } from "react"
import Sidebar from "../comp/login/Sidebar"
import StepOne from "../comp/login/StepOne"
import lang from "../configs/lang"

function Login() {

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

    return (
        <>
            <Sidebar language={language} step={step} />
            <main>
                {
                    step === 1 ?
                        <StepOne language={language} setStep={setStep} />
                        :
                        null
                }
            </main>
        </>
    )
}

export default Login
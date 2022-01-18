function Sidebar({ step, language }) {

    const stepItems = [
        {
            step: language.register.stepOne.title
        },
        {
            step: language.register.stepTwo.title
        },
        {
            step: language.register.stepThree.title
        },
        {
            step: language.register.stepFour.title
        }
    ]

    return (
        <aside>
            <div className="aside-inner mini-inner">
                <div className="aside-top">
                    <div className="aside-logo">
                        <h1>-eduplatform-</h1>
                    </div>
                </div>
                <div className="aside-bottom">
                    <div className="aside-steps">
                        {
                            stepItems.map((stepItem, key) => (
                                <div key={key} className="aside-step">
                                    <div className="aside-step-left">
                                        <div className={step === (key + 1) ? 'aside-step-circle active' : 'aside-step-circle'}>
                                            <h1>{key + 1}</h1>
                                        </div>
                                    </div>
                                    <div className="aside-step-right">
                                        <div className="aside-step-title link">
                                            <h1>{stepItem.step}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
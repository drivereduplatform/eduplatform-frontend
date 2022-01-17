import { useState } from "react";
import { useEffect } from "react";

function Notification({ log, timing, language }) {
    const [notification, setNotification] = useState(false)
    useEffect(() => {
        if (log && timing) {
            setNotification(true)
            setTimeout(() => {
                setNotification(false)
            }, timing)
        } else {
            setNotification(false)
        }
    }, [log, timing])

    return (
        <div style={notification && log ? { transform: `${window.matchMedia("(max-width: 650px)").matches ? 'translateY(0px)' : 'translateX(0px)'}`, opacity: 1 } : { transform: `${window.matchMedia("(max-width: 650px)").matches ? 'translateY(200px)' : 'translateX(200px)'}`, opacity: 0 }} className="notification">
            <div className="notification-inner">
                <div className="notification-sub-title sub-title">
                    <h1>{language.notification.alert}</h1>
                </div>
                <div className="notification-info sub-info">
                    <p>{log}</p>
                </div>
            </div>
        </div>
    )
}

export default Notification;
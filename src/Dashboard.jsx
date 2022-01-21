import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'universal-cookie';
import api from "./configs/api";
import axios from 'axios'
// import { Routes, Route } from "react-router-dom";
import UserDashboardAside from "./comp/UserDashboardAside";
import lang from "./configs/lang";

function Dashboard() {

    const [language, setLanguage] = useState({})
    const [userDataLoading, setUserDataLoading] = useState(false)
    const cookies = new Cookies();
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})
    const cookiesGet = cookies.get('sessionID')

    useEffect(() => {
        for (let i = 0; i < lang.length; i++) {
            if (userData.lang === lang[i].lang) {
                setLanguage(lang[i])
            }
        }
    }, [userData])

    useEffect(() => {
        if (cookiesGet) {
            axios.post(`${api.api_url}/account/login-session`, {
                sessionID: cookiesGet
            }).then(response => {
                if (response.data.success) {
                    setUserData(response.data.message)
                    setUserDataLoading(true)
                } else {
                    navigate('/login')
                }
            })
        } else {
            navigate('/login')
        }
    }, [navigate, cookiesGet, userData.lang])
    return (
        userData.role === 'user' ?
            (
                userDataLoading ?
                    userData ?
                        <>
                            <UserDashboardAside language={language} userData={userData} />
                            {/* <Routes>
                                <Route />
                            </Routes> */}
                        </>
                        :
                        null
                    :
                    null
            )
            :
            userData.role === 'curator' ?
                (
                    <div>curator</div>
                )
                :
                userData.role === 'admin' ?
                    (
                        <div>admin</div>
                    )
                    :
                    null
    )
}

export default Dashboard
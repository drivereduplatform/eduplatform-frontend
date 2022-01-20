import { useState } from "react"
import api from "../configs/api"
import openImg from '../img/Vector.svg'
import { Link } from "react-router-dom"
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import home from '../img/home.png'
import video from '../img/video.png'
import test from '../img/list.png'
import question from '../img/question.png'

function UserDashboardAside({ userData, language }) {

    const [accountOpener, setAccountOpener] = useState(false)
    console.log(language);
    const cookies = new Cookies();
    const history = useNavigate()

    return (
        <aside>
            <div className="aside-inner mini-inner">
                <div className="aside-top">
                    <div className="aside-logo">
                        <h1>-eduplatform-</h1>
                    </div>
                </div>
                <div className="aside-bottom">
                    <div className="aside-account">
                        <div className="aside-account-left">
                            <div className="aside-account-img">
                                <img src={`${api.api_url}/${userData.img}`} alt="" />
                            </div>
                            <div className="aside-account-title link">
                                <h1>{userData.username}</h1>
                            </div>
                        </div>
                        <div className="aside-account-right">
                            <div onClick={() => setAccountOpener(!accountOpener)} className={accountOpener ? 'aside-account-button active' : 'aside-account-button'}>
                                <img src={openImg} alt="" />
                            </div>
                        </div>
                    </div>
                    {
                        accountOpener ?
                            (
                                <div className="aside-account-details">
                                    <Link to="/settings" className="aside-account-details-link link">
                                        <p>{language.userDashboard.asideBar.links.settings}</p>
                                    </Link>
                                    <Link to="/packages" className="aside-account-details-link link">
                                        <p>{language.userDashboard.asideBar.links.packages}</p>
                                    </Link>
                                    <div onClick={() => {
                                        cookies.remove('sessionID')
                                        history('/login')
                                    }} className="aside-account-details-link link">
                                        <p>{language.userDashboard.asideBar.links.logOut}</p>
                                    </div>
                                </div>
                            )
                            :
                            null
                    }
                    <div className="aside-links">
                        <Link to="/" className='aside-link link'>
                            <img src={home} alt="" />
                            <p>{language.userDashboard.asideBar.links.main}</p>
                        </Link>
                        <Link to="/lessons" className='aside-link link'>
                            <img src={video} alt="" />
                            <p>{language.userDashboard.asideBar.links.lessons}</p>
                        </Link>
                        <Link to="/test" className='aside-link link'>
                            <img src={test} alt="" />
                            <p>{language.userDashboard.asideBar.links.takeTest}</p>
                        </Link>
                        <Link to="/questions" className='aside-link link'>
                            <img src={question} alt="" />
                            <p>{language.userDashboard.asideBar.links.askQuestion}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default UserDashboardAside
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import apilib from '../../apilib'
import { useCookies } from 'react-cookie'

function Main ({ language, setSteps }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies()

  useEffect(() => {
    // if user is already logged in, redirect to home
    if (cookies?.sessionID) {
      apilib.account.loginSession(cookies?.sessionID)
        .then(response => {
          if (response.data.success) {
            navigate('/userpage')
          } else {
            removeCookie('sessionID')
          }
        }).catch(console.error)
    }
  }, [navigate, cookies, removeCookie]);

  function loginRequest (e) {
    e.preventDefault()
    if (username && password) {
      apilib.account.login(username, password)
        .then(response => {
          if (response.data.success) {
            const { sessionID } = response.data
            setCookie('sessionID', sessionID, { path: '/', maxAge: 60 * 60 * 24 * 7 * 4 * 12 * 100 })
          } else {
            // TODO: show error
            console.log('error')
            console.log(response.data)
          }
        })
    } else {
      // TODO: show error
      console.log('error')
    }
  }

  return (
    <section className='login'>
      <div className='container'>
        <div className='login-inner inner'>
          <div className='login-title title'>
            <h1>{language.login.title}</h1>
          </div>
          <form onSubmit={e => loginRequest(e)} className='login-form'>
            <div className='login-form-input'>
              <input
                onChange={e => setUsername(e.target.value)}
                placeholder={language.login.inputs.username}
                type='text'
              />
            </div>
            <div className='login-form-input'>
              <input
                onChange={e => setPassword(e.target.value)}
                placeholder={language.login.inputs.password}
                type='password'
              />
            </div>
            <div className='login-form-checkbox note'>
              <input onChange={() => setCheckbox(!checkbox)} type='checkbox' />{' '}
              <div className='login-form-checkbox-indicator'></div>
              <p>{language.login.buttons.rememberMe}</p>
            </div>
            <button
              onClick={e => loginRequest(e)}
              className='login-form-button'
            >
              {language.login.buttons.login}
            </button>
            <Link to='/register' className='login-form-note note'>
              <p>{language.login.buttons.dontHaveAccount}</p>
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Main

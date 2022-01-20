import api from './configs/api.jsx';
import axios from 'axios';

var toexport = {
  // TODO: write all functions for all kinds of api calls
  account: {
    login: (username, password) => {
      return axios.post(`${api.api_url}/account/login`, {
        username: username,
        password: password 
      })
    },
    register: (username, password, email, session) => {
      return axios.post(`${api.api_url}/account/register`, {
        username: username,
        password: password,
        email: email,
        session: session
      })
    },
    logout: (session) => {
      return axios.post(`${api.api_url}/account/logout`, {
        session: session
      })
    },
    loginSession: (session) => {
      return axios.post(`${api.api_url}/account/login-session`, {
        session: session
      })
    },
  }
}

export default toexport
import axios from 'axios'

function getToken() {
  return localStorage.getItem('token') || ''
}

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    // 'Content-Type': 'application/json'
    Authorization: 'Bearer ' + getToken(),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})

export default apiClient
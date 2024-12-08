import axios from 'axios'
const baseUrl = 'http://localhost:8081/properties'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
      headers: { 
        Authorization: token,
        'Content-Type': 'multipart/form-data'
    },
    }
    console.log('headers', config)
  
    const response = await axios.post(`${baseUrl}/add`, newObject, config)
    console.log('response', response)
    return response.data
  }

export default {
    getAll, create, setToken
  }
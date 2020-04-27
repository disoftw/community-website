import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'https://aaaimx-admin.herokuapp.com/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 40000, // request timeout
  headers: { Accept: 'application/json; version=1' }
})

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  res => {
    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 200 && res.status !== 201 && res.status !== 204) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    const { response, message } = error
    console.log(response)

    return Promise.reject(response)
  }
)

export default service

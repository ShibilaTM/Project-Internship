import axios from 'axios'
const axiosInstance = axios.create({
    baseURL:'http://127.0.0.1:4000'
})
//request interceptor
axiosInstance.interceptors.request.use((config)=>{
    const accessToken = sessionStorage.getItem('userToken')
    
    //inserting token to the header
    if(accessToken){
        if(config) config.headers.token = accessToken
    }
    return config
},(error)=>{
    return Promise.reject(error)
}
)
export default axiosInstance

import axios from 'axios';

const config = () => {
    const api = axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // FIX - Looping to check the credentials
    // api.interceptors.response.use(
    //     res => {
    //       return res
    //     },
    //     err => {
    //       return new Promise(async (resolve, reject) => {
    //         const originalReq = err.config
    //         console.log(originalReq)
  
    //         if (err.response.status === 401 && originalReq && !originalReq.retry) {
    //           originalReq.retry = true
    //           const token = localStorage.getItem('tokenRT')
  
    //           let res = await api.post('/auth/access-token', {
    //             refreshToken: token
    //           })
    //           const accessToken = res.data.accessToken
  
    //           console.log(res.data.accessToken, 'accessToken')
    //           console.log(res.data, 'data')

    //           originalReq.headers['Authorization'] = `Bearer ${accessToken}`

    //           resolve(axios(originalReq))
    //         } else {
    //           reject(err)
    //         }
    //        })
    //     }
    // )

    return api
};

export const api = config()


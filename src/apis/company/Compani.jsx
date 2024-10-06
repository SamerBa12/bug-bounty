import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL
console.log(BASE_URL)
export const apiRegisterCompany = (data) => { 
    return new Promise((resolve , reject ) => { 
        axios.post(`${BASE_URL}/company/register` , data)
        .then((res) => {
            resolve(res)
            console.log(BASE_URL)
        }) .catch((err) => {
            reject(err)
        })
    })
}

export const apiLoginCompany = (data)=>{ 
    return new Promise((resolve , reject) => { 
        axios.post(`${BASE_URL}/company/login` , data ) 
        .then((res)=> { 
            resolve(res)
            localStorage.setItem('token' , res.data.data.token )
        })
        .catch((err)=>{ 
            reject(err)
        })
    })
}




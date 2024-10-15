import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL
 export const apiRegisterResearcher= (data)=>{
    return new Promise((resolve,reject)=>{
        axios.post(`${BASE_URL}/researcher/register`,data)
        .then((res)=>{
            resolve(res)
           
        })
        .catch((err)=>{
            reject(err)
        })
    })

 }
 export const apiLoginResearcher =(data)=>{
    return new Promise((resolve,reject)=>{
        axios.post(`${BASE_URL}/researcher/login`,data)
        .then((res)=>{
            resolve(res)
            localStorage.setItem('token',res.data.data.token)
            console.log(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
 }
import axios from "axios"
import { axiosInstance } from "../axiosInstance"

export const ApiHomePageResearcher = ()=>{
    return new Promise((resolve , reject)=>{
        axiosInstance.get('/researcher/home')
        .then((res)=>{
            resolve(res.data.data)
            console.log(res)
        }
        )
        .catch(err=>reject(err))
    })
}
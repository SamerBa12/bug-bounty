import axios from "axios"
import { axiosInstance } from "../axiosInstance"



export const ApiHomePageCompany = ()=>{
    return new Promise((resolve , reject)=>{
        axiosInstance.get(`/company/home`)
        .then((res)=>{
            resolve(res.data.data.researcher)
            console.log(res)
        }
        )
        .catch(err=>reject(err))
    })
}
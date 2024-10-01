import { createSlice } from "@reduxjs/toolkit";
import firstLogo from '../assets/image/darrebni-logo.jpg' 
export const sliceCompanies=createSlice({
    name:'sliceCompanies',
    initialState:{
        companies:[{
            logo:firstLogo,
            name:'دربني',
            webSite:'www.darrebni.com',
            description:'تقدم شركة دربني مسارات برمجية وتقنية تخصصية، لمساعدة الشباب والمهتمين بالمجال البرمجي على وضع خطواتهم الأولى في سوق العمل',
            users:150,
            type:'حكومية'
        },
        {
            logo:firstLogo,
            name:'مستقل',
            webSite:'www.darrebni.com',
            description:'تقدم شركة دربني مسارات برمجية وتقنية تخصصية، لمساعدة الشباب والمهتمين بالمجال البرمجي على وضع خطواتهم الأولى في سوق العمل',
            users:150,
            type:'حكومية'
        },
        {
            logo:firstLogo,
            name:'Darrebni',
            webSite:'www.darrebni.com',
            description:'تقدم شركة دربني مسارات برمجية وتقنية تخصصية، لمساعدة الشباب والمهتمين بالمجال البرمجي على وضع خطواتهم الأولى في سوق العمل',
            users:150,
            type:'حكومية'
        },
        {
            logo:firstLogo,
            name:'Darrebni',
            webSite:'www.darrebni.com',
            description:'تقدم شركة دربني مسارات برمجية وتقنية تخصصية، لمساعدة الشباب والمهتمين بالمجال البرمجي على وضع خطواتهم الأولى في سوق العمل',
            users:150,
            type:'حكومية'
        },
        {
            logo:firstLogo,
            name:'Darrebni',
            webSite:'www.darrebni.com',
            description:'تقدم شركة دربني مسارات برمجية وتقنية تخصصية، لمساعدة الشباب والمهتمين بالمجال البرمجي على وضع خطواتهم الأولى في سوق العمل',
            users:150,
            type:'حكومية'
        },
        {
            logo:firstLogo,
            name:'Darrebni',
            webSite:'www.darrebni.com',
            description:'تقدم شركة دربني مسارات برمجية وتقنية تخصصية، لمساعدة الشباب والمهتمين بالمجال البرمجي على وضع خطواتهم الأولى في سوق العمل',
            users:150,
            type:'حكومية'
        },
        {
            logo:firstLogo,
            name:'Darrebni',
            webSite:'www.darrebni.com',
            description:'تقدم شركة دربني مسارات برمجية وتقنية تخصصية، لمساعدة الشباب والمهتمين بالمجال البرمجي على وضع خطواتهم الأولى في سوق العمل',
            users:150,
            type:'حكومية'
        },
        ] ,
        filterdCompanies:[]
    },
    reducers:{
        fetchCompanies:(state,action) =>{
            state.companies= action.payload
        },
        searchCompany:(state,action) =>{
            state.filterdCompanies=state.companies.filter((company)=>{
                const searchQuery= action.payload.toLowerCase().trim()
                return(

                    company.name.toLowerCase().includes(searchQuery)
                )
             })
             console.log(state.filterdCompanies)
    
        },
        resetFilters:(state) =>{
            state.filterdCompanies=state.companies
        }
    }
})
export  const {fetchCompanies,searchCompany,resetFilters} =sliceCompanies.actions
export default sliceCompanies.reducer
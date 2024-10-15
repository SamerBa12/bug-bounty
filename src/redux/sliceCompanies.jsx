import { createSlice } from "@reduxjs/toolkit";
export const sliceCompanies=createSlice({
    name:'sliceCompanies',
    initialState:{
        companies:[
           
        ] ,
        filterdCompanies:[],
        researchers:[]
    },
    
    reducers:{
        fetchCompanies:(state,action) =>{
            state.companies= action.payload
        },
        fetchResearchers:(state,action)=>{
            state.researchers=action.payload
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
export  const {fetchCompanies,fetchResearchers,searchCompany,resetFilters} =sliceCompanies.actions
export default sliceCompanies.reducer
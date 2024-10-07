import { configureStore } from "@reduxjs/toolkit";
import sliceCompanies from "./sliceCompanies";
import  researcherSlice  from "./researcherReducer";


export const store =configureStore({
    reducer:{
        sliceCompanies: sliceCompanies,
        researcher:researcherSlice,

    }
})
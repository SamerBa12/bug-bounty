import { configureStore } from "@reduxjs/toolkit";
import sliceCompanies from "./sliceCompanies";


export const store =configureStore({
    reducer:{
        sliceCompanies: sliceCompanies
    }
})
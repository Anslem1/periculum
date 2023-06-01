import { createSlice } from "@reduxjs/toolkit";
import { customersAboutProfileAboutData } from "./Data/customersProfileAboutData";
import { customersProfileData } from "./Data/CustomersProfileData";


const initialState = {
    customersAboutProfileAboutData,
    customersProfileData
}

const customersProfileSlice = createSlice({
    name: 'customerprofiledata', initialState,
    reducers: {

        setCustomersAboutProfileAboutData: (state, action) => {
            state.customersAboutProfileAboutData = action.payload
        },

        setCustomersProfileData: (state, action) => {
            state.customersProfileData = action.payload
        },

    }
})

export const { setCustomersAboutProfileAboutData, setCustomersProfileData } = customersProfileSlice.actions

export default customersProfileSlice.reducer
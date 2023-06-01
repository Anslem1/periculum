import { createSlice } from "@reduxjs/toolkit";
import { bankProfile } from "./data/bankProfileData";
import { customerData } from "./data/customerData";



const initialState = {
    bankProfile,
    customerData
}

const reportDataSlice = createSlice({
    name: "reportdata",
    initialState,
    reducers: {
        setBankProfile: (state, action) => {
            state.bankProfile = action.payload
        },
        setCustomerData: (state, action) => {
            state.customerData = action.payload
        }
    }
})

export const { setBankProfile, setCustomerData } = reportDataSlice.actions

export default reportDataSlice.reducer
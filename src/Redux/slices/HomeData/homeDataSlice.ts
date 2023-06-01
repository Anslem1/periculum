import { createSlice } from "@reduxjs/toolkit";
import {
    averageDataInCredits,
    averageDataInNumbers,
    averageMonthlyBalance,
    chartOptions,
    pieChartData
} from "./data";

const initialState = {
    averageDataInNumbers,
    averageDataInCredits,
    averageMonthlyBalance,
    pieChartData,
    chartOptions
};

const homeDataSlice = createSlice({
    name: 'homedata',
    initialState,
    reducers: {
        setAverageDataInNumbers: (state, action) => {
            state.averageDataInNumbers = action.payload;
        },
        setAverageDataInCredits: (state, action) => {
            state.averageDataInCredits = action.payload;
        },
        setAverageMonthlyBalance: (state, action) => {
            state.averageMonthlyBalance = action.payload;
        },
        setPieChartData: (state, action) => {
            state.pieChartData = action.payload;
        },
        setChartOptions: (state, action) => {
            state.chartOptions = action.payload;
        }
    }
});

export const {
    setAverageDataInNumbers,
    setAverageDataInCredits,
    setAverageMonthlyBalance,
    setPieChartData,
    setChartOptions
} = homeDataSlice.actions;

export default homeDataSlice.reducer;

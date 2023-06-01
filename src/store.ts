import { configureStore } from '@reduxjs/toolkit';
import homeDataSlice from './Redux/slices/HomeData/homeDataSlice';
import reportDataSlice from './Redux/slices/CustomerSlice/ReportSlice';
import customerProfileSlice from './Redux/slices/CustomerProfile/customersProfileSlice';

const store = configureStore({
    reducer: {
        homeData: homeDataSlice,
        reportData: reportDataSlice,
        customerProfileData: customerProfileSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
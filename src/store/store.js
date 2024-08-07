import { configureStore } from "@reduxjs/toolkit";
import homePriceReducer from './slice';

export const store = configureStore({
    reducer:{
        homePrice:homePriceReducer
    }
})
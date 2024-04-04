import {configureStore} from "@reduxjs/toolkit"
import carsSlice from "./cars/carsSlice";

export const store = configureStore({
    reducer: {
        carsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
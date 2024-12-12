import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import loginReducer from '@/redux/auth/AuthSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        login: loginReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
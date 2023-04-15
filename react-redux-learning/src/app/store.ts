import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'

// State Manager Store
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
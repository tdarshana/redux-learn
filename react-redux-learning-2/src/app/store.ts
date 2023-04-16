import { configureStore } from "@reduxjs/toolkit"
import postsReducer from '../features/posts/PostSlice'

// State Manager Store
export const store = configureStore({
    reducer: {
        posts: postsReducer,
    }
})
import { configureStore } from '@reduxjs/toolkit'
import likesReducer from '../features/likes/likesSlice'

export const store = configureStore({
  reducer: {
    likes: likesReducer
  },
})
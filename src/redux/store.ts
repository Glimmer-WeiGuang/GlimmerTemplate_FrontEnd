import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '@/redux/authSlice'
export const store = configureStore({
    reducer: {
     Auth :AuthReducer,
    },
  })
export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

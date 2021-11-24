import { createSlice } from '@reduxjs/toolkit'

interface AuthState { 
    status: boolean;
}
const initialAuthState  = {
    status: false,
} as AuthState

export const authSlice = createSlice({
    name: 'Auth',
    initialState:initialAuthState,
    reducers: {
        Login:(state) => {
            state.status = true;
        },
        Logout:(state) => {
            state.status = false;
        }
    },
}) 

export const { Login, Logout,  } = authSlice.actions
export default authSlice.reducer
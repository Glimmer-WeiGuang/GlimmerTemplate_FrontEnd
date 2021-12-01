import { createSlice } from '@reduxjs/toolkit';
import {State} from '@/redux/store';
interface AuthState { 
    status: string | null;
}
let initialAuthState : AuthState;
const authStorage = localStorage.getItem('status')
if(authStorage){
    initialAuthState ={
        status:authStorage,
    }
}else{
    initialAuthState ={
        status:null,
    }
}


export const authSlice = createSlice({
    name: 'Auth',
    initialState:initialAuthState,
    reducers: {
        Login:(state) => {
           state.status= authStorage;
        },
        Logout:(state) => {
            state.status = null;
        }
    },
}) 

export const { Login, Logout,  } = authSlice.actions;
export const selectStatus = (state : State) => state.Auth.status
export default authSlice.reducer
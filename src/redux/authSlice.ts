import { createSlice } from '@reduxjs/toolkit';
import {State} from '@/redux/store';
interface AuthState { 
    status: boolean;
}
let initialAuthState : AuthState;
const authStorage = localStorage.getItem('status')
if(authStorage){
    initialAuthState ={
        status:true,
    }
}else{
    initialAuthState ={
        status:false,
    }
}


export const authSlice = createSlice({
    name: 'Auth',
    initialState:initialAuthState,
    reducers: {
        Login:(state) => {
           state.status= true;
        },
        Logout:(state) => {
            state.status = false;
        }
    },
}) 

export const { Login, Logout,  } = authSlice.actions;
export const selectStatus = (state : State) => state.Auth.status
export default authSlice.reducer
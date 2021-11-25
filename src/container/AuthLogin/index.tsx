/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch ,useAppSelector }   from '@/common/utils/hooks'
import {Login} from '@/redux/authSlice'
import { useNavigate ,Navigate } from "react-router-dom";

export default function AuthLogin():JSX.Element{
    
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const status:boolean = useAppSelector((state)=> state.Auth.status);
    if(status){
        return <Navigate to="/"  />;
    }
    function SetLogin(){
        dispatch(Login());
        localStorage.setItem('status' , 'UserName');
    }
    return (
        <div >
            AuthLogin : 当前状态：{status.toString()}  
            <button 
            className="text-blue-500" 
            onClick={()=>SetLogin()}>Login</button>
        </div>
    )
}
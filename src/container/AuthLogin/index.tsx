import { useAppDispatch ,useAppSelector }   from '@/common/utils/hooks'
import {Login} from '@/redux/authSlice'
import { Navigate } from "react-router-dom";

export default function AuthLogin():JSX.Element{
    const dispatch = useAppDispatch();
    const status = useAppSelector((state)=> state.Auth.status);

    const LoginOnClick = function() {
        dispatch(Login)
        console.log(status)
        Navigate({to:"/home", replace: true })
    }
    return (
        <div className="text-blue-500">
            Home
            <div onClick={LoginOnClick}>Login</div>
        </div>
    )
}
import Login from '@/container/AuthLogin'
import { Navigate, Route } from "react-router-dom";
import { useAppSelector }   from '@/common/utils/hooks'
export default function AuthGuard({
    children,
}:{
    children: JSX.Element;
}):JSX.Element
{
    const status = useAppSelector((state)=> state.Auth.status);
    
    if(status){
        Navigate({to:"/home", replace: true })
    }
    return (
        <Route element={<Login/>} />
    )
    
}
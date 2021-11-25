import { useAppSelector }   from '@/common/utils/hooks';
import { Navigate } from "react-router-dom";

export default function AuthGuard({
    children,
}:{
    // FIXME: This type should be ensure
    children :JSX.Element;
}){
    const status = useAppSelector((state)=> state.Auth.status);
    
    if(status){
        return (
            <>{children}</>
        );
    }else{
        return (
            <Navigate to="/login"  />
        )
        
    }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch ,useAppSelector }   from '@/common/utils/hooks'

import {Logout} from '@/redux/authSlice'

export default function Home():JSX.Element{
    const dispatch = useAppDispatch();
    const status:boolean = useAppSelector((state)=> state.Auth.status);

    function SetLogout(){
        dispatch(Logout());
        localStorage.removeItem('status');
    }
    return (
        <div >
            Home 当前状态：{status.toString()}  
            <button 
            className="text-blue-500" 
            onClick={()=>SetLogout()}>Logout</button>
        </div>
    )
}
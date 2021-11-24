import { useAppDispatch ,useAppSelector }   from '@/common/utils/hooks'
import {Logout} from '@/redux/authSlice'
export default function Home():JSX.Element{
    const dispatch = useAppDispatch();
    const status = useAppSelector((state)=> state.Auth.status);

    const LogoutOnClick = function() {
        dispatch(Logout)
        console.log(status)
    }
    return (
        <div className="text-blue-500">
            Home
            <div onClick={LogoutOnClick}>Logout</div>
        </div>
    )
}
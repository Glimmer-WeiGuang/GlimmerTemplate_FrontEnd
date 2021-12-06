/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch, useAppSelector } from '@/common/utils/hooks'
import { Button } from 'antd';

import { Logout } from '@/redux/authSlice'

export default function Home(): JSX.Element {
    const dispatch = useAppDispatch();
    const status: boolean | null = useAppSelector((state) => state.Auth.status);
    const name = localStorage.getItem('status');
    function SetLogout() {
        dispatch(Logout());
        localStorage.removeItem('status');
    }
    return (
        <div 
        className="w-screen h-screen bg-gray-200 flex justify-center items-center ">
            <div 
            className='w-2/5 h-1/4  bg-blue-200 flex-col justify-center items-center rounded-xl'>
                <h1
                className='text-3xl text-center '
                >Home Page / Login status : {status}
                </h1>
                <h2
                className='text-3xl text-center '
                >当前账号： {name?.toString()}</h2>
                <Button
                type="primary" block
                className="text-blue-500"
                onClick={() => SetLogout()}>Logout</Button>
            </div>
        </div>
    )
}
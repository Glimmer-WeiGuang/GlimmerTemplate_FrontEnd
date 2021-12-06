/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch, useAppSelector } from '@/common/utils/hooks'
import { Login } from '@/redux/authSlice'
import { Navigate } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AuthLogin(): JSX.Element {

    const dispatch = useAppDispatch();
    const status: boolean | null = useAppSelector((state) => state.Auth.status);
    let navigate = useNavigate();

    let [statusState , setStatusState] = useState(status)
   
    function SetLogin(value:any) {
        setStatusState(value.username);
        localStorage.setItem('status', value.username);
        dispatch(Login());
        navigate('/',{replace: true});
    }
    function onFinishFailed(errorInfo: any){
            console.log('Failed:', errorInfo);
    }
    if (statusState) {
        return <Navigate to="/" />;
    }
    return (
        <div className="w-screen h-screen bg-gray-200 flex justify-center items-center ">
            <div className='w-2/5 h-1/4  bg-blue-200 flex-col justify-center items-center rounded-xl'>
                <h1 
                className='text-3xl text-center mb-12 mt-12'
                > Login Page</h1>
                 <Form
                className="mt-"
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={SetLogin}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16}}>
                    <Button type="primary" block htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            </div>
           
        </div>
    )
}
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch, useAppSelector } from '@/common/utils/hooks'
import { Login } from '@/redux/authSlice'
import { Navigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';

export default function AuthLogin(): JSX.Element {

    const dispatch = useAppDispatch();
    const status: boolean = useAppSelector((state) => state.Auth.status);
    if (status) {
        return <Navigate to="/" />;
    }
    function SetLogin() {
        dispatch(Login());
        localStorage.setItem('status', 'UserName');
    }
    function onFinishFailed(errorInfo: any){
            console.log('Failed:', errorInfo);
    }
    return (
        <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
            <div className='w-2/5 h-2/5  bg-blue-200 flex justify-center items-center'>
                 <Form
                name="basic"
                labelCol={{ span: 8 }}
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

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            </div>
           
        </div>
    )
}
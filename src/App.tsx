import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '@/container/Home';
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import AuthLogin from '@/container/AuthLogin'
import AuthGuard from "./container/AuthGuard";
import 'antd/dist/antd.css';

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Router>
                    <Routes>
                        <Route path="/" >
                            <Route index element={
                                <AuthGuard>
                                    <Home/>
                                </AuthGuard>
                            } />
                        </Route>
                    </Routes>
                <Routes>
                    <Route path='/login' element={<AuthLogin />} />
                </Routes>
            </Router>
        </Provider>
    )
}
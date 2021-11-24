import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '@/container/Home';
import {store} from '@/redux/store'
import { Provider } from 'react-redux'
import AuthLogin from '@/container/AuthLogin'
export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path='login' element={<AuthLogin />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    )
}
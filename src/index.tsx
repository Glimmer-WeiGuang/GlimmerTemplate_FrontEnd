import React from 'react';
import ReactDOM from 'react-dom';
import "@/styles/tailwind.css";
import './index.css';
import Home from '@/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Login from '@/Login'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

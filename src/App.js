import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Page/Layout/Layout';
import Home from "./Page/Home/Home";
import Login from "./Page/Login/LoginPage";
import useToken from "./Component/Services/useToken";

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    // localStorage.setItem('username', 'test');
    // localStorage.clear();
    // const user = localStorage.getItem('token');
    // console.log(user);

    const { token } = useToken();
    console.log(token);

    if (token === null) {
        //TODO Navigate to login
        console.log('/login');
        return(
            <Navigate replace to="/login" />
        );
    } else {
        console.log('children');
        return children;
    }
}

function App() {

    // Navigation dans requireAuth
    return (
        // TODO ROUTER
        <BrowserRouter>
            <RequireAuth />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/login" element={<Login />} />
                {/* <Route path='/*' element={<Navigate to='/' />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
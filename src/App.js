import './App.css';

import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from './Page/Layout/Layout';
import Home from "./Page/Home/Home";
import Login from "./Page/Login/LoginPage";
import Logout from "./Page/Logout/LogoutPage";

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    // localStorage.setItem('username', 'test');
    // localStorage.clear();
    // const user = localStorage.getItem('token');
    // console.log(user);

    const token = localStorage.getItem('token');
    const location = useLocation();

    if (token === null) {
        // console.log(location.pathname);

        if (location.pathname.includes('/login')) {
            console.log('Utilisateur non connecté');
            return children;
        } else {
            return( <Navigate to="/login" /> );
        }

    } else {
        console.log('Utilisateur connecté');
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
                <Route path="/logout" element={<Logout/>} />
                {/* <Route path='/*' element={<Navigate to='/' />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
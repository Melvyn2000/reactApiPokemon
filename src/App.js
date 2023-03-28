import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Page/Layout/Layout';
import Home from "./Page/Home/Home";
import Login from "./Page/Login/LoginPage";

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    localStorage.setItem('username', 'test');
    // localStorage.clear();
    const user = localStorage.getItem('token');

    // Changer la redirection --> if (user === null)
    // Ajouter le composant RequireAuth() dans le return App()

    console.log(user);

    if (user === null) {
        // TODO Navigate to login
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}

function App() {

// Navigation dans requireAuth
  return (
        // TODO ROUTER
        <BrowserRouter>
            <RequireAuth></RequireAuth>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;

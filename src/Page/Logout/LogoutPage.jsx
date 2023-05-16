import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            localStorage.removeItem('token');
            console.log('Déconnexion réussie ! 2');
            navigate("/logout");
        }
      }, [token]);
}

export default LogoutPage;
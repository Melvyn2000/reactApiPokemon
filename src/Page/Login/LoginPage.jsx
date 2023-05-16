import LoginForm from "../../Component/LoginForm/LoginForm";
import {useEffect, useState} from "react";
import axios from 'axios';
import useToken from "../../Component/Services/useToken";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    const handleSubmit = async (credentials) => {

        setFormSubmitting(true);
        // console.log(credentials);
        try {
            //TODO Make Login call

            axios({
                method: 'post',
                url: 'https://127.0.0.1:8000/api/login_check',
                data: {
                    username: credentials.username,
                    password: credentials.password
                }
              })
              .then(function (response) {
                  console.log('Connexion réussie !');
                  setToken(response.data.token);
                  navigate("/");
              })
              .catch(function (error) {
                console.log('Connexion échouée !');
                console.log(error);
              });

        } catch (error) {
            console.log(error);
            // message
        } finally {
            setFormSubmitting(false);
        }
    };

    return(
        token ? 
        <Navigate to={'/'} /> :
        <div>
            <LoginForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default LoginPage;
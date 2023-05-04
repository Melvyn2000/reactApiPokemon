import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState} from "react";
import axios from 'axios';
import useToken from "../../Component/Services/useToken";
import { redirect } from "react-router-dom";

const LoginPage = () => {

    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const { token, setToken } = useToken();

    const handleSubmit = async (credentials) => {

        setFormSubmitting(true);
        console.log(credentials);
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
                setToken(response.data.token);
              })
              .catch(function (error) {
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
        <div>
            <LoginForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default LoginPage;
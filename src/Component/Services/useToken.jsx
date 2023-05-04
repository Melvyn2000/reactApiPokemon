import { useState } from 'react';

export default function useToken() {

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString;
    };

    const [token, setToken] = useState(getToken());

    return {
        setToken: saveToken,
        token
    }
}
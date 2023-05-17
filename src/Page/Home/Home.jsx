import React, { useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

    const token = localStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        const headers = { "Authorization" : `Bearer ${token}` };

        axios.get('https://127.0.0.1:8000/api/pokemon', { headers }).then(response => console.log(response.data));
    });

    return(
        <h1>Home page</h1>
    );
}

export default HomePage;
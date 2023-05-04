// Genral imports
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// Style imports
import './LoginForm.css';

const LoginForm = ({handleSubmit}) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = ({key, value}) => {
        setCredentials((prevState) => {
            return {...prevState, [key]: value};
        });
    };

    const handleLoginChange = (event) => {
        handleChange({
            key: 'username',
            value: event.currentTarget.value
        });
    };

    const handlePasswordChange = (event) => {
        handleChange({
            key: 'password',
            value: event.currentTarget.value
        });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        await handleSubmit(credentials);
    };
    //TODO Add Credentials Inputs (With Input Component)
    return (
        <>

            <form id="login-form" className="login-wrapper" onSubmit={handleSubmitForm}>

                <h1>Please Log In</h1>

                <div className='credentials-and-password-container'>

                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => handleLoginChange(e)}/>
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => handlePasswordChange(e)}/>
                </label>

                <div>
                    <button type="submit">Submit</button>
                </div>

                </div>
            </form>
        </>
    );
};

export default LoginForm;

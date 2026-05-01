import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User registered:', formValues);
        // Add registration logic here
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                    <input type='text' name='username' value={formValues.username} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type='email' name='email' value={formValues.email} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input type='password' name='password' value={formValues.password} onChange={handleChange} required />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Signup;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('loginToken');
        if (token) {
            navigate('/home');
        }else{
            navigate('/');
        }

    }, []); // Empty dependency array means this effect runs only once after the initial render

    const logout = () => {
        localStorage.removeItem('loginToken');
        navigate('/');
    };

    return (
        <div>
            <div>
                <h1>Welcome!</h1>
                <h2>The user is successfully login </h2>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default HomePage;

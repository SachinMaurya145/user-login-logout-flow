import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ isLoggedIn, setLoggedIn }) {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        navigate('/');
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome!</h1>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : null}
        </div>
    );
}

export default HomePage;

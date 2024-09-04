import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ isLoggedIn, setLoggedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, []); // Empty dependency array means this effect runs only once after the initial render

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

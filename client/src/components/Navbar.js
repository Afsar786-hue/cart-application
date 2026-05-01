import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onLogin, onLogout, isLoggedIn }) => {
    return (
        <nav>
            <h1>My Cart Application</h1>
            <div>
                <Link to="/cart">Cart ({cartCount})</Link>
                {isLoggedIn ? (
                    <button onClick={onLogout}>Logout</button>
                ) : (
                    <button onClick={onLogin}>Login</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

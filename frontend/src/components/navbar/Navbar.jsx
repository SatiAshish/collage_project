import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useAuth } from '../../store/auth';

const Navbar = () => {
    const { isLoggedIn } = useAuth();
  return (
    <>
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">GEHU</Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/about">About</Link>
                        </li> */}

                        {isLoggedIn ? (
                            <>
                                {/* <li>
                                    <Link to="/list">List</Link>
                                </li> */}
                                {/* <li>
                                    <Link to="/addUser">Birthday</Link>
                                </li>
                                <li>
                                    <Link to="/addAnniversary">Anniversary</Link>
                                </li> */}
                                <li>
                                    <Link to="/logout">Logout</Link> 
                                </li>
                                <li>
                                    <Link to="/admin">Admin</Link> 
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">SignUp</Link>
                                </li>
                            </>
                        )}
                        
                    </ul>
                </nav>
            </div>
        </header>
    </>
  );
};

export default Navbar;

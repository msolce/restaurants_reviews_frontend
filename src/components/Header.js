import React from "react";
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">Restaurant Reviews</Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/restaurants"} className="nav-link"> Restaurants</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to={"/login"} className="nav-link">{props.user.login? `Logout ${props.user.name}` : 'Login'}</Link>
                    </li>
                </div>
            </nav>
        </>
    )

};
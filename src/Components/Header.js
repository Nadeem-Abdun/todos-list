import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">{props.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {props.contact}
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/mailus">{props.contact1}</Link></li>
                                <li><Link className="dropdown-item" to="/callus">{props.contact2}</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/customrequest">{props.contact3}</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired, // Create a restriction that only strings can be passed into this prop
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Place Your Title Here", // If Incase the props were not passed then these default props will be displayed.
    home: "Place Your Home Here",
    about: "Place Your About Here",
    contact: "Place Your Contact Here"
}

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <div className="menu">
            <ul className="lista">
                <li className="opciones">
                    <Link to="/category/clothing" className="opciones">
                        Indumentaria
                    </Link>
                </li>
                <li className="separator">|</li>
                <li className="opciones">
                    <Link to="/category/relojes" className="opciones">
                        Relojes
                    </Link>
                </li>
                <li className="separator">|</li>
                <li className="opciones">
                    <Link to="/category/electronics" className="opciones">
                        Tecnologia
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <div className="menu">
            <ul className="lista">
                <li className="opciones">
                    <Link to="/category/indumentaria" className="opciones">
                        Indumentaria
                    </Link>
                </li>
                <li className="separator">|</li>
                <li className="opciones">
                    <Link to="/category/pelotas" className="opciones">
                        Pelotas
                    </Link>
                </li>
                <li className="separator">|</li>
                <li className="opciones">
                    <Link to="/category/Calzado" className="opciones">
                        Calzado
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

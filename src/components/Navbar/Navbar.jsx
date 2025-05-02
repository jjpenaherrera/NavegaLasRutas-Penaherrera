import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'
import { IoLogoGitlab } from "react-icons/io5";


function Navbar() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <IoLogoGitlab />
                    <ul className='nav-bar-items'>
                        <Link to="/">
                            <li>Inicio</li>
                        </Link>
                        <Link to="/categoria/productos">
                            <li>Productos</li>
                        </Link>
                        <Link to="/categoria/contacto">
                            <li>Contacto</li>
                        </Link>
                    </ul>
                    <Link to="/carrito">
                        <CartWidget />
                    </Link>
                </nav>
            </header>
        </>
    );
};

export default Navbar

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/form">Form</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>

                <button className="btn btn-primary btn-sm btn-exit">Sair</button>

            </div>
        </nav>
    );
}

export default Navbar;

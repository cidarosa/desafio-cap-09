import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <a href="link" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </a>

                <button className="btn btn-primary btn-sm btn-exit">Sair</button>

            </div>
        </nav>
    );
}

export default Navbar;

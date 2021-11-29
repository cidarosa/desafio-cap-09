import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import history from 'util/history';
import { getTokenData, isAuthenticated, removeAuthData, TokenData } from 'util/requests';
import './styles.css';

type AuthData = {
    authenticated: boolean;
    tokenData?: TokenData;
}

const Navbar = () => {

    const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

    useEffect(() => {

        if (isAuthenticated()) {
            setAuthData({
                authenticated: true,
                tokenData: getTokenData()
            });
        }
        else {
            setAuthData({
                authenticated: false
            });
        }
    }, []);

    const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthData({
            authenticated: false
        });
        history.replace('/');
    };

    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>

                <div>
                    {authData.authenticated ? (
                        <button className="btn btn-primary btn-sm btn-exit" onClick={handleLogoutClick}>Sair</button>
                    ) : (
                        <Link to="/">Login</Link>
                    )}

                </div>



            </div>
        </nav>
    );
}

export default Navbar;

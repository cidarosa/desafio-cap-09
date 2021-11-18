import { ReactComponent as MainImage } from 'assets/images/auth-image.svg';
import Login from './Login';
import './styles.css';

const Auth = () => {

    return (
        <div className="auth-container">

            <div className="auth-banner-container">
                <h1>Avalie Filmes</h1>

                <p>Diga o que você achou do seu filme favorito</p>
                <MainImage />
            </div>

            <div className="auth-form-container">
                <h1>Aqui vai o componente para login</h1>
                <Login />
            </div>
        </div>
    );
};

export default Auth;
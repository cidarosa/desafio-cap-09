import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from './Login';
import './styles.css';

const Auth = () => {

    return (
        <div className="home-container">
            <div className="home-card">
                <div className="home-content-container">
                    <h1>Avalie Filmes</h1>

                    <p>Diga o que você achou do seu filme favorito</p>
                </div>
                <div className="home-image-container">
                    <MainImage />
                </div>
            </div>

            <div className="home-login-card">
                <div>
                    <h1>Aqui vai o componente para login</h1>
                </div>
               
               <Login />

            </div>

        </div>
    );
};

export default Auth;
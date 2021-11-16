import Navbar from "components/Navbar";
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';

const Home = () => {

    return (
        <>
            <Navbar />
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
                    <h1>Login</h1>
                </div>

            </div>
        </>
    )
};

export default Home;
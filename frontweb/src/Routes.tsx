import { Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import MovieDetails from "pages/MovieDetails";
import history from "util/history";
import Home from "pages/Home";
import PrivateRoute from "components/PrivateRoute";
import MovieList from "pages/MovieList";


const Routes = () => (
    <Router history={history} >
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path="/movies">
                <Route path="/movies" exact>
                    <MovieList />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetails />
                </Route>
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;
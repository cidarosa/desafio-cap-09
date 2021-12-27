import { Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import history from "util/history";
import Home from "pages/Home";

const Routes = () => (
    <Router history = {history} >
        <Navbar />
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/movies" exact>
                <Movies />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    </Router>
);

export default Routes;
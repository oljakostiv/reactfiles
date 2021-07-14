import './App.css';
import MoviesSelector from "./movies/MoviesSelector";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import GenresSelector from "./genres/GenresSelector";


function App() {
    return (
        <div className={'App'}>
            <div className={'navMovies'}>
                <img
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                    alt="logo"/>
                <Router>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/genres/'}>Genres</Link>
                    <Switch>
                        <Route exact path={'/'}></Route>
                        <Route path={'/genres/'} render={(props) => <GenresSelector {...props}/>}/>
                    </Switch>
                </Router>
                <p className={'inputMovies'}>
                    <input type="text"/>
                    <button>search..</button>
                </p>
            </div>
            <div className={'App-header'}>
                <MoviesSelector/>
            </div>
        </div>
    );
}

export default App;

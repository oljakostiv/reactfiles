import './App.css';
import MoviesSelector from "./movies/MoviesSelector";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Movie from "./movies/movie/Movie";
import React from "react";

function App() {

    return (
        <div className={'App'}>
            <div className={'AppStyle'}>
                <Router>
                    <Switch>
                        <Route exact path={'/'} component={MoviesSelector}/>
                        <Route path={'/movie/movieTitle/:movieId'} component={Movie}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;

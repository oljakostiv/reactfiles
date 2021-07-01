import './App.css';
import Users from "./comp/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/users'}>Users</Link>
                </li>

                <hr/>
            </div>

            <Switch>
                <Route exact path={'/'}>
                    Welcome!
                </Route>
                <Route path={'/users'} render={
                    (props) => <Users {...props}/>
                }/>
            </Switch>

        </Router>
    );
}
import './App.css';
import Users from "./comp/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Posts from "./comp/posts/Posts";
import Comments from "./comp/comments/Comments";

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
                <li>
                    <Link to={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link to={'/comments'}>Comments</Link>
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
                <Route path={'/posts'} render={
                    (props) => <Posts {...props}/>
                }/>
                <Route path={'/comments'} render={
                    (props) => <Comments {...props}/>
                }/>
            </Switch>

        </Router>
    );
}
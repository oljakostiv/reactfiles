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
            <div className={'linksStyle'}>
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
            </div>

            <Switch>
                <Route exact path={'/'}>
                    <div className={'homeStyle'}>Welcome!</div>
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

            <div className={'photo'}>
                <img src="https://i.pinimg.com/originals/e6/a7/e8/e6a7e84d075ed453954d6d882beacf0f.jpg" alt="field"/>
            </div>

        </Router>
    );
}
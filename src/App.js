import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <Router>
            <div style={{background: "#859759", color: "#fff", textAlign:"center"}} className={'appStyle'}>
                <div><Link to={'/'}>Home</Link></div>
                <div><Link to={'/users'}>Users</Link></div>
                <div><Link to={'/posts'}>Posts</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>

                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <div className={'welcomeHome'}><h3>Welcome!</h3></div>
                    }}/>
                    <Route exact path={'/users'} render={(props) => {
                        return <Users {...props}/>;
                    }}/>
                    <Route exact path={'/posts'} render={(props) => {
                        return <Posts {...props}/>;
                    }}/>
                    <Route exact path={'/comments'} render={(props) => {
                        return <Comments {...props}/>;
                    }}/>
                </Switch>

            </div>
        </Router>
    );
}


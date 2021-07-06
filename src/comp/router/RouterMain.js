import './RouterMain.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

export default function RouterMain (){

    return (
        <Router>
            <div className={'routerStyle'}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>USERS</Link></li>
                <li><Link to={'/posts'}>POSTS</Link></li>
                <li><Link to={'/comments'}>COMMENTS</Link></li>
            </div>

            <Switch>
                <Route exact path={'/'}><div className={'homeWelcomeStyle'}><h1 className={'welcome'}>Welcome!</h1></div></Route>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>

            </Switch>
        </Router>
    )


}

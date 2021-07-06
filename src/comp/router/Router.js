import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function RouterMain (){

    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>USERS</Link>
                <Link to={'/posts'}>POSTS</Link>
                <Link to={'/comments'}>COMMENTS</Link>
            </div>

            <Switch>
                <Route exact path={'/'}>Welcome!</Route>
                <Route path={'/users'} component={users}/>
                <Route path={'/posts'} component={posts}/>
                <Route path={'/comments'} component={comments}/>

            </Switch>
        </Router>
    )


}

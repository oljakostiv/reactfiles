import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Users from "./components/users/Users";

export default function App() {
  return (
      <Router>
          <div>
              <div><Link to={'/users'}>Users</Link></div>
              <div><Link to={'/posts'}>Posts</Link></div>
              <div><Link to={'/comments'}>Comments</Link></div>

              <Route exact path={'/users'} render={()=>{
                  return <Users/>;
              }}/>
              <Route exact path={'/posts'} render={()=>{
                  return <Posts/>;
              }}/>
              <Route exact path={'/comments'} render={()=>{
                  return<Comments/>;
              }}/>

          </div>
      </Router>
  );
}


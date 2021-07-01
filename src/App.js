import './App.css';
import Users from "./comp/users/Users";

export default function App() {
    return (
        <Router>
            <div>

                <Link to={'/users'}>Users</Link>
            </div>

            <Svitch>
                <Route path={'/users'} component={Users}/>
            </Svitch>
        </Router>
    );
}
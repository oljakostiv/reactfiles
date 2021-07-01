import './App.css';

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
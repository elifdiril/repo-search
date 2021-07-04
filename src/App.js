import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import RepoList from './components/RepoList';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route exact path="/repos">
          <RepoList />
        </Route>
        <Route exact path="/users">
          <UserList />
        </Route>
      </div>
    </Router>
  );
}

export default App;

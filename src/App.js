import './App.css';
import Login from './components/Login';

import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Signup from './components/navbar/Signup';

function App() {
  return (
    <div>
      <Switch>

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/signin">
          <Dashboard />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;

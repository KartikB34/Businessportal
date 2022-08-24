import './App.css';
import Login from './components/login/Login';

import { Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/login/Signup';

import { useCookies } from "react-cookie";
import axios from "axios"

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  return (
    <div>
      <Switch>

        <Route exact path="/">
          <Login setCookie={setCookie} cookies={cookies} />
        </Route>

        
          <Route path="/signin">
          <Switch>
            <Dashboard />
          </Switch>
          </Route>
        

        <Route exact path="/signup">
          <Signup />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;

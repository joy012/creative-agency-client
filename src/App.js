import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

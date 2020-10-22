import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';


export const UserContext = createContext();

function App() {
  const [role, setRole] = useState('');
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    role: ''
  })

  const data = async () => {
    const fetchData = await fetch('https://creative-agency-spa.herokuapp.com/getAdmin?email=' + loggedInUser.email);
    const response = await fetchData.json();
    return response;
  }

  if (loggedInUser.email && !loggedInUser.role) {
    data().then(data => {
      if (data.length !== 0) {
        setRole('admin');
        const updateUser = { ...loggedInUser };
        updateUser.role = role;
        setLoggedInUser(updateUser);
      }
      else {
        setRole('user');
        const updateUser = { ...loggedInUser };
        updateUser.role = role;
        setLoggedInUser(updateUser);
      }
    })

  }

 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
          <PrivateRoute to='/dashBoard'>
            <DashBoard/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

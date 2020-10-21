import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Pages/Admin/Admin/Admin';
import PrivateRouteAdmin from './Pages/Admin/PrivateRouteAdmin/PrivateRouteAdmin';
import Customer from './Pages/Customer/Customer/Customer';
import PrivateRouteCustomer from './Pages/Customer/PrivateRouteCustomer/PrivateRouteCustomer';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn';


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
          <PrivateRouteCustomer path='/customer'>
            <Customer />
          </PrivateRouteCustomer>
          <PrivateRouteAdmin path='/admin'>
            <Admin />
          </PrivateRouteAdmin>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

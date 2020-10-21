import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRouteAdmin = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.role === 'admin' && (sessionStorage.getItem('token') && loggedInUser.email)) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRouteAdmin;
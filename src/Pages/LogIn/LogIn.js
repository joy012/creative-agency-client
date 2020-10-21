import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleLogo from '../../images/logos/googleLogo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './LogIn.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';


const LogIn = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state ||{ from: { pathname: "/" } };

    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {...loggedInUser};
                signedInUser.img = photoURL;
                signedInUser.name = displayName;
                signedInUser.email = email;
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            })
            .catch(error => {
            
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
           sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
           
          });
    }
    
    return (
        <div className='body'>
            <NavBar/>
            <div className="text-center login mt-5">
                <div className="center px-4">
                    <h3 className="mt-5">Login With</h3>
                    <div onClick={googleSignIn} className="social-login row mt-3 mx-5 align-items-center">
                        <div className="col-3 px-1">
                            <img className='d-block mr-auto google-logo' src={googleLogo} alt="" />
                        </div>
                        <div className="col-8 px-1">
                            <span>Continue With Google</span>
                        </div>
                    </div>
                    <p className='mt-2'>Don't have an account? <Link to='/login'>create an account</Link></p>
                </div>
            </div>
            <Link to='/' className='btn btn-dark text-white w-25 mx-auto d-block my-5'> Go Home</Link>
        </div>
    );
};

export default LogIn;
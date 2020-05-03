import React, { useState, useEffect } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Styles

// Get the Firebase config from the auto generated file.
const firebaseConfig = {
  apiKey: "AIzaSyC3M6EK8yZsiKEAeX-4ItsGEsS-2kfNRUw",
  authDomain: "login-71dfc.firebaseapp.com",
  databaseURL: "https://login-71dfc.firebaseio.com",
  projectId: "login-71dfc",
  storageBucket: "login-71dfc.appspot.com",
  messagingSenderId: "684369063533",
  appId: "1:684369063533:web:8c490f38ff51f9341e5964",
  measurementId: "G-8QJCG0MDD4",
};

// Instantiate a Firebase app.
const firebaseApp =
  !firebase.apps.length && firebase.initializeApp(firebaseConfig);

function Signin2(props) {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  const [state, setState] = useState({
    isSignedIn: undefined,
  });

  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged((user) => {
        setState({ isSignedIn: !!user });
        setUserdata(firebaseApp.auth().currentUser);
      });

    return () => {
      unregisterAuthObserver();
    };
  }, []);

  return (
    <div>
      <div>Login With google</div>
      <div>your Infomation will shown there</div>
      {state.isSignedIn !== undefined && !state.isSignedIn && (
        <div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebaseApp.auth()}
          />
        </div>
      )}
      {state.isSignedIn && (
        <div className="container fluid mt-4">
          Hello
          <span className="p-2 mx-4 bg-success text-white m-3 rounded shadow-lg mx-auto">
            {userdata.displayName}
          </span>{" "}
          <div>
            {" "}
            <img
              src={userdata.photoURL}
              className="img img-fluid my-4 img-thumbnail"
            />
          </div>
          <div className="p-4 bg-success my-4">You are now signed In!</div>
          <br></br>
          <ul class="list-group text-dark">
            <li class="list-group-item">{userdata.email}</li>
            <li class="list-group-item">{userdata.phoneNumber}</li>
          </ul>
          <a
            href="#"
            className="btn btn-outline-danger mt-4 "
            onClick={(() => firebaseApp.auth().signOut(), localStorage.clear())}
          >
            Sign-out
          </a>
        </div>
      )}
    </div>
  );
}

export default Signin2;

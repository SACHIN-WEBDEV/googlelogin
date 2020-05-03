// import React, { Component } from "react";
// // Import FirebaseAuth and firebase.

// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "firebase";

// // Configure Firebase.
// const firebaseConfig = {
//   apiKey: "AIzaSyC3M6EK8yZsiKEAeX-4ItsGEsS-2kfNRUw",
//   authDomain: "login-71dfc.firebaseapp.com",
//   databaseURL: "https://login-71dfc.firebaseio.com",
//   projectId: "login-71dfc",
//   storageBucket: "login-71dfc.appspot.com",
//   messagingSenderId: "684369063533",
//   appId: "1:684369063533:web:8c490f38ff51f9341e5964",
//   measurementId: "G-8QJCG0MDD4",
// };
// firebase.initializeApp(firebaseConfig);
// class SignIn extends Component {
//   state = {
//     isSignedIn: false,
//     unregisterAuthObserver: "", // Local signed-in state.
//   };

//   uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: "popup",
//     signInSuccessUrl: "/signedIn",
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     ],
//     callbacks: {
//       // Avoid redirects after sign-in.
//       signInSuccessWithAuthResult: () => false,
//     },
//   };

//   // Listen to the Firebase Auth state and set the local state.
//   componentDidMount() {
//     this.unregisterAuthObserver = firebase
//       .auth()
//       .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
//   }

//   // Make sure we un-register Firebase observers when the component unmounts.
//   componentWillUnmount() {
//     this.unregisterAuthObserver();
//   }

//   render() {
//     if (!this.state.isSignedIn) {
//       return (
//         <div>
//           <h1>My App</h1>
//           <p>Please sign-in:</p>
//           <StyledFirebaseAuth
//             uiConfig={this.uiConfig}
//             firebaseAuth={firebase.auth()}
//           />
//         </div>
//       );
//     }
//     return (
//       <div>
//         <h1>My App</h1>
//         <p>
//           Welcome {firebase.auth().currentUser.displayName}! You are now
//           signed-in!
//           {console.log(firebase.auth())}
//         </p>
//         <img src={firebase.auth().currentUser.photoURL} />
//         <a
//           onClick={() => {
//             firebase.auth().signOut();
//             localStorage.clear();
//           }}
//         >
//           Sign-out
//         </a>
//       </div>
//     );
//   }
// }

// export default SignIn;

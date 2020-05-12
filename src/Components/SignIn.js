// import React, { Component } from "react";
// // Import FirebaseAuth and firebase.

// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "firebase";

// // Configure Firebase.
// const firebaseConfig = {

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

import app from '@firebase/app';
import '@firebase/auth';

const config = {
    apiKey: "AIzaSyB9Q9ofcB9Tj09jIlgObtaEdMSSqCnMPUY",
    authDomain: "react-with-firebase-auth.firebaseapp.com",
    databaseURL: "https://react-with-firebase-auth.firebaseio.com",
    projectId: "react-with-firebase-auth",
    storageBucket: "react-with-firebase-auth.appspot.com",
    messagingSenderId: "863453024634"
};

class Firebase {
    
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

  }


  
  export default Firebase;
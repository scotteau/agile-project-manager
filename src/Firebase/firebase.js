import app from "firebase/app";
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6YK822CXwK7BJLafu7CRP4K2diAZhmik",
    authDomain: "agilo-47e6e.firebaseapp.com",
    databaseURL: "https://agilo-47e6e.firebaseio.com",
    projectId: "agilo-47e6e",
    storageBucket: "agilo-47e6e.appspot.com",
    messagingSenderId: "10774289130",
    appId: "1:10774289130:web:bf86041cd8c1b360205593",
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    };

    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    };

    doSignInAnonymously = () => {
        return this.auth.signInAnonymously();
    };

    doSignOut = () => {
        return this.auth.signOut();
    };

    doCreatePermanentAccountFromAnonymous(email, password) {
        const credential = firebase.auth.EmailAuthProvider.credential(
            email,
            password
        );
        return this.auth.currentUser.linkWithCredential(credential);
    }

    doPasswordReset = (email) => {
        this.auth.sendPasswordResetEmail(email);
    };

    doPasswordUpdate = (password) => {
        this.auth.currentUser.updatePassword(password);
    };
}

const myFirebase = new Firebase();

export default myFirebase;

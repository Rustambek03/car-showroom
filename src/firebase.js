import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDdFrk7h7_7K9Ztn2SyevLw0qNJw0BePGI",
    authDomain: "carshowroom-c9226.firebaseapp.com",
    projectId: "carshowroom-c9226",
    storageBucket: "carshowroom-c9226.appspot.com",
    messagingSenderId: "983552120803",
    appId: "1:983552120803:web:3fc197b65e0899d8f7b2d6",
    measurementId: "G-XDQFY0DKS7"
})

export const auth = app.auth()
export default app;
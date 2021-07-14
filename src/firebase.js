import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCHoJhaL906M7P8cNCkDjAYpAc08sFk740",
    authDomain: "gopchat-1.firebaseapp.com",
    projectId: "gopchat-1",
    storageBucket: "gopchat-1.appspot.com",
    messagingSenderId: "903927861792",
    appId: "1:903927861792:web:6041b4154159ff5189a245"
  }).auth();
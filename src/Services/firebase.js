import React from "react";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC5R3dp3vIDS0rtLdBlfqu_G6ghLYdBe38",
  authDomain: "webapp-14d57.firebaseapp.com",
  databaseURL: "https://webapp-14d57.firebaseio.com",
  projectId: "webapp-14d57",
  storageBucket: "webapp-14d57.appspot.com",
  messagingSenderId: "221897083975",
  appId: "1:221897083975:web:d88ec74f40ea58ba073562",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

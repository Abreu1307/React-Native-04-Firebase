import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBMIGpmIvlSExm45WS69NHUhRcsokGndtg",
    authDomain: "colecionaveisfb-489c8.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-489c8.firebaseio.com",
    projectId: "colecionaveisfb-489c8",
    storageBucket: "colecionaveisfb-489c8.appspot.com",
    messagingSenderId: "967055320250",
    appId: "1:967055320250:web:34cc47ceeb1a3805a38e83",
    measurementId: "G-048EBSJQ36"
  };
  
  var app = firebase.initializeApp(firebaseConfig);
  
export const conexaoFS = app.firestore();
import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBndTq2htRx9MOeaIVea0L3uqhu8K7tjA",
  authDomain: "netflix-landing-app.firebaseapp.com",
  databaseURL: "https://netflix-landing-app.firebaseio.com",
  projectId: "netflix-landing-app",
  storageBucket: "netflix-landing-app.appspot.com",
  messagingSenderId: "368170449753",
  appId: "1:368170449753:web:874acb611a0e1384e5aa48",
  measurementId: "G-V8HMDDM0X0",
};

firebase.initializeApp(firebaseConfig);

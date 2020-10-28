import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbynh1zifw3sXYSJ-2Fa0Wj5n8a8TfPNU",
    authDomain: "my-portfolio-4c6ac.firebaseapp.com",
    databaseURL: "https://my-portfolio-4c6ac.firebaseio.com",
    projectId: "my-portfolio-4c6ac",
    storageBucket: "my-portfolio-4c6ac.appspot.com",
    messagingSenderId: "549417644796",
    appId: "1:549417644796:web:e3175fa43eaa7adafc5d79",
    measurementId: "G-MXN3JT1K50"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  export  {projectStorage, projectFirestore }


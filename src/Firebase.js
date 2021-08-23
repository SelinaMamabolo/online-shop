import Firebase from 'firebase'
 
const firebaseConfig = {
    apiKey: "AIzaSyCaIzdzCgHa8MsDiIJ2tJtx_VyqWaPkjfY",
    authDomain: "selinas-shopping.firebaseapp.com",
    projectId: "selinas-shopping",
    storageBucket: "selinas-shopping.appspot.com",
    messagingSenderId: "696484040744",
    appId: "1:696484040744:web:cdf881147f0d2b2b84251d",
    measurementId: "G-5SCWFQ1ECM"
  };

  // Initialize Firebase
  const firebase = Firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;
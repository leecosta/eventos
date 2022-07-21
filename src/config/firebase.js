import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_uULJtGzFyo4H8MbdA4Q0spMlwGtKnVs",
  authDomain: "eventos-a16d1.firebaseapp.com",
  projectId: "eventos-a16d1",
  storageBucket: "eventos-a16d1.appspot.com",
  messagingSenderId: "350796964633",
  appId: "1:350796964633:web:783f39b2070c7c1c3c9b88",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

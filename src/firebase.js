import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxLx5FZTLb11y-KhVXoWz8-fJxXWvUM3E",
  authDomain: "hotstar-clone-vj.firebaseapp.com",
  projectId: "hotstar-clone-vj",
  storageBucket: "hotstar-clone-vj.appspot.com",
  messagingSenderId: "47609283656",
  appId: "1:47609283656:web:2a0cca4e89417deaa2c47d",
  measurementId: "G-C090P6HNT6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

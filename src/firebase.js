import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBGmx94KYxOtCldkc54-l15D_i-MrtXmfw",
  authDomain: "hotstar-clone-vijayanand.firebaseapp.com",
  projectId: "hotstar-clone-vijayanand",
  storageBucket: "hotstar-clone-vijayanand.appspot.com",
  messagingSenderId: "602665242144",
  appId: "1:602665242144:web:e6ccef79f5ab8b1796f645",
  measurementId: "G-8RZ11E803R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

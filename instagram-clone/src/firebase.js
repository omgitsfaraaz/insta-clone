import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqhE0zmbCLTPaabAVnFJTVvkhFyL3IbN8",
  authDomain: "instagram-clone-react-6d594.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-6d594.firebaseio.com",
  projectId: "instagram-clone-react-6d594",
  storageBucket: "instagram-clone-react-6d594.appspot.com",
  messagingSenderId: "901313528850",
  appId: "1:901313528850:web:0193e54603a3fcc98684cb",
  measurementId: "G-937VLV8534"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };



// export default db;
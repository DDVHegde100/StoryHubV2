import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAQ0Mh1vWafzX3j52cpTukZxNNqN3tEvT0",
  authDomain: "storyhub-4b750.firebaseapp.com",
  databaseURL: "https://storyhub-4b750-default-rtdb.firebaseio.com",
  projectId: "storyhub-4b750",
  storageBucket: "storyhub-4b750.appspot.com",
  messagingSenderId: "683173626528",
  appId: "1:683173626528:web:947c116e67e1977446bfc5"
};
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
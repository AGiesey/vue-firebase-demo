import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCS1KxVtcCTnKzd1KPwLSiUOZkKKTbW2ws",
  authDomain: "adams-health.firebaseapp.com",
  projectId: "adams-health",
  storageBucket: "adams-health.appspot.com",
  messagingSenderId: "539784789790",
  appId: "1:539784789790:web:7821f7ce7a3b244578930f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
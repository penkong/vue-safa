import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: precess.env.VUE_APP_APIKEY,
  authDomain: "vue-safa.firebaseapp.com",
  databaseURL: "https://vue-safa.firebaseio.com",
  projectId: "vue-safa",
  storageBucket: "",
  messagingSenderId: "650561370831",
  appId: "1:650561370831:web:d87dcbaeb27b343a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
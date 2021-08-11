import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXLuEfbwH8_5KrLZZhdjCUVe5IldGBbPg",
  authDomain: "serviciosdecuidado-72b78.firebaseapp.com",
  projectId: "serviciosdecuidado-72b78",
  storageBucket: "serviciosdecuidado-72b78.appspot.com",
  messagingSenderId: "27725666319",
  appId: "1:27725666319:web:2362df6233131226d7ab7a",
  measurementId: "G-42J94ZL6H1"
};
// Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig)
export const db = fb.firestore()
import firebase from "firebase/app";
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAan90C5DpY2yNlJkIKUn-_UdZ8qUhRlzU",
  authDomain: "chat-27a62.firebaseapp.com",
  projectId: "chat-27a62",
  storageBucket: "chat-27a62.appspot.com",
  messagingSenderId: "266967054783",
  appId: "1:266967054783:web:d88dcb24f93b5ed710490a"
});

export const firestore = firebase.firestore();


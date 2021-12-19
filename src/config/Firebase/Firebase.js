import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {getFirestore, collection, doc, addDoc, setDoc, updateDoc, getDoc, getDocs, onSnapshot, orderBy, query, where, increment} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy8SXyQFSh9ZQJqDmTf-D2BYlbxqV8pzo",
  authDomain: "reactexpo-67600.firebaseapp.com",
  projectId: "reactexpo-67600",
  storageBucket: "reactexpo-67600.appspot.com",
  messagingSenderId: "4732830661",
  appId: "1:4732830661:web:add3bd258710d2ab4f01ac"
}

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
  increment
};
import { getApps, initializeApp, getApp, FirebaseApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  limit,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  runTransaction,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCPzwN8xh-g8opC-itI2dPRWECt4fTfLlc',
  authDomain: 'passman-26534.firebaseapp.com',
  projectId: 'passman-26534',
  storageBucket: 'passman-26534.appspot.com',
  messagingSenderId: '611423179753',
  appId: '1:611423179753:web:bf2ef0e540bcb76a783178',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

const authClient = {
  db,
  collection,
  query,
  getDocs,
  where,
  limit,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  runTransaction,
}

export { app, authClient, db }

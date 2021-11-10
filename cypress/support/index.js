import './commands'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import { attachCustomCommands } from 'cypress-firebase'

const fbConfig = {
  apiKey: "AIzaSyBJbKVWjAHHlMbSzX3Ivj_9V1oy31FEY1U",
  authDomain: "e-commerce-store-db-a3b29.firebaseapp.com",
  databaseURL: "https://e-commerce-store-db-a3b29.firebaseio.com",
  projectId: "e-commerce-store-db-a3b29",
  storageBucket: "e-commerce-store-db-a3b29.appspot.com",
  messagingSenderId: "661424246453",
  appId: "1:661424246453:web:f0d32016ec8e9e3b9ff8fc",
  measurementId: "G-FCV5K7Z0H5"
}

firebase.initializeApp(fbConfig)

attachCustomCommands({ Cypress, cy, firebase })

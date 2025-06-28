// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBY9KlgbNC1-ndvOxSPD5TUnBdj7fgrcxk',
  authDomain: 'first-firebase-project-ff69d.firebaseapp.com',
  projectId: 'first-firebase-project-ff69d',
  storageBucket: 'first-firebase-project-ff69d.firebasestorage.app',
  messagingSenderId: '693965021637',
  appId: '1:693965021637:web:0b9fb18b5adacbbac1abac'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

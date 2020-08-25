import firebase from 'firebase';
const ENV = process.env;

const firebaseApp = firebase.initializeApp({
  apiKey: ENV['REACT_APP_FIREBASE_KEY'],
  authDomain: ENV['REACT_APP_FIREBASE_AUTH_DOMAIN'],
  databaseURL: ENV['REACT_APP_FIREBASE_DB_URL'],
  projectId: ENV['REACT_APP_FIREBASE_PROJECT_ID'],
  storageBucket: ENV['REACT_APP_FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: ENV['REACT_APP_FIREBASE_MESSAGING_SENDER_ID'],
  appId: ENV['REACT_APP_FIREBASE_APP_ID'],
  measurementId: ENV['REACT_APP_FIREBASE_MEASUREMENT_ID']
});

const db = firebaseApp.firestore();
const storage = firebase.storage();
const authorize = firebase.auth();
const storageRef = storage.ref();

export { db, storage, authorize, storageRef };

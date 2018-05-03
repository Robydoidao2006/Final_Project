import * as firebase from 'firebase';

const prodConfig = {
  apiKey:"AIzaSyA9kYmqd9oggHt3ayTc-1GplTIUdBhTMzc",
  authDomain: "finalproject-1525061969448.firebaseapp.com",
  databaseURL: "https://finalproject-1525061969448.firebaseio.com",
  projectId: "finalproject-1525061969448",
  storageBucket: "finalproject-1525061969448.appspot.com",
  messagingSenderId: "1080943868439"
};

const devConfig = {
  apiKey:"AIzaSyA9kYmqd9oggHt3ayTc-1GplTIUdBhTMzc",
  authDomain: "finalproject-1525061969448.firebaseapp.com",
  databaseURL:"https://finalproject-1525061969448.firebaseio.com",
  projectId: "finalproject-1525061969448",
  storageBucket: "finalproject-1525061969448.appspot.com",
  messagingSenderId: "1080943868439"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};

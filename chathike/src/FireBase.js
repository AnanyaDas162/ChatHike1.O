// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*apiKey: "AIzaSyBJehbnwTNikoiiRcnGJKRSmpmm2vcg4tk",
  authDomain: "chathike-7722b.firebaseapp.com",
  projectId: "chathike-7722b",
  storageBucket: "chathike-7722b.appspot.com",
  messagingSenderId: "982175666836",
  appId: "1:982175666836:web:22ea410b5fafaef5f39a81",
  measurementId: "G-HKSG4LF2G1"*/
  /*apiKey: "AIzaSyA4MgulH622dK5uIWTKCokv40KlnVZcj5g",
  authDomain: "firechat-a25b9.firebaseapp.com",
  projectId: "firechat-a25b9",
  storageBucket: "firechat-a25b9.appspot.com",
  messagingSenderId: "475144490749",
  appId: "1:475144490749:web:6546a73157624a86707894",
  dbLink:"https://firechat-a25b9-default-rtdb.firebaseio.com"*/
  apiKey: "AIzaSyB0N5szMmsr1QYXZu3sbdUKfyEN7AIE2_M",
  authDomain: "chathike.firebaseapp.com",
  databaseURL: "https://chathike-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chathike",
  storageBucket: "chathike.appspot.com",
  messagingSenderId: "126648467902",
  appId: "1:126648467902:web:6b772cb97d67155de739ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*
The code you provided appears to be initializing an instance of Firebase in a JavaScript application using the Firebase SDK.

Here's a breakdown of what's happening:

firebaseConfig is an object that contains the configuration information needed to connect to a Firebase project. This includes things like the project ID, API key, and authentication settings.

initializeApp() is a method provided by the Firebase SDK that creates a new Firebase app instance using the provided configuration information. This method returns the initialized app instance.

The initialized app instance is assigned to the app variable using the const keyword. This means that app cannot be reassigned to a different value later in the code.
*/
const analytics = getAnalytics(app);

export const auth = getAuth(app);
/*
The code you provided initializes the Authentication service of Firebase by calling the getAuth() method and passing in the app object as a parameter. This creates a reference to the Authentication service and allows you to interact with it using the auth variable.
*/
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
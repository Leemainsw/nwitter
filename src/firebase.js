import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDE7U397EusRKK3C0dhC29JXdJK6NDqeMQ",
    authDomain: "nwitter-8a8b4.firebaseapp.com",
    databaseURL: "https://nwitter-8a8b4.firebaseio.com",
    projectId: "nwitter-8a8b4",
    storageBucket: "nwitter-8a8b4.appspot.com",
    messagingSenderId: "725363423433",
    appId: "1:725363423433:web:dcbb2a60989a88ce743518"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
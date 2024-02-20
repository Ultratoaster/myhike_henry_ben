//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC2UsVutJyVsGJ8JdXVNZVCQt_oKAEGhUY",

    authDomain: "comp1800-demo-cdb90.firebaseapp.com",
  
    projectId: "comp1800-demo-cdb90",
  
    storageBucket: "comp1800-demo-cdb90.appspot.com",
  
    messagingSenderId: "340216776283",
  
    appId: "1:340216776283:web:f70de545e94b74357d617e"
  
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

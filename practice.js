// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClH9hrPBiHsdEPzZF_wYJ6PFZOTv_sCec",
    authDomain: "kwitter-app-aa512.firebaseapp.com",
    projectId: "kwitter-app-aa512",
    storageBucket: "kwitter-app-aa512.appspot.com",
    messagingSenderId: "528470187177",
    appId: "1:528470187177:web:d1c098a9c4ba143c919db8",
    measurementId: "G-DCJDLFXY1X"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
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

    //Caution:If u see my js code dont even put a space in the code below.
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room  Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
function redirectToRoomName(Name){
console.log(Name);
localStorage.setItem("room_name",Name);
window.location="index.html";
}

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().href("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="index.html";
}
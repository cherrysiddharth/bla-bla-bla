
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCHAizjpnzgNrZ2rQZtKOtpRS0h0RS6gaQ",
    authDomain: "covid19bot-gxul.firebaseapp.com",
    databaseURL:"https://covid19bot-gxul-default-rtdb.firebaseio.com/",
    projectId: "covid19bot-gxul",
    storageBucket: "covid19bot-gxul.appspot.com",
    messagingSenderId: "757999173122",
    appId: "1:757999173122:web:2906e6b4fe774747e2f11b",
    measurementId: "G-1SYCXTMC3H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function clickme(){
     irritating =document.getElementById("inputuser").value;
      firebase.database().ref("/").child(inputuser).update({
          purpose:"addinguser"
      });
  }
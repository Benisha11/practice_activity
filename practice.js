var firebaseConfig = {
    apiKey: "AIzaSyADtCKROgRj8sUvw1NND9vzEO1_gHwtRyE",
    authDomain: "kwitter-f546b.firebaseapp.com",
    databaseURL: "https://kwitter-f546b.firebaseio.com",
    projectId: "kwitter-f546b",
    storageBucket: "kwitter-f546b.appspot.com",
    messagingSenderId: "774768451832",
    appId: "1:774768451832:web:357dd3bfa45d419c135b0d"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addUser()
    {
        user_name=document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
        });
    }
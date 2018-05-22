  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyASBaPuT5BNt2eXIjn_L4M00q799FbY61o",
    authDomain: "sonrise-b5e2e.firebaseapp.com",
    databaseURL: "https://sonrise-b5e2e.firebaseio.com",
    projectId: "sonrise-b5e2e",
    storageBucket: "sonrise-b5e2e.appspot.com",
    messagingSenderId: "787522362715"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  $("#add-user").on("click", function (event) {

      event.preventDefault();
  
      var userType = $("#ment").val().trim();
      var userName = $("#name").val().trim();
      var userEmail = $("#email").val().trim();
      var userPic = $("#picture").val().trim();
      var userBio = $("#texarea1").val();
      var userZip = $("#input_text").val().trim();
      var userInt1 = $("#d1").val().trim();
      var userInt2 = $("#d2").val().trim();
      
      var newUser = {
        type: userType,
        name: userName,
        email: userEmail,
        picture: userPic,
        bio: userBio,
        zipcode: userZip,
        interest1: userInt1,
        interest2: userInt2, 
    }
    console.log(newUser);
    database.ref().push(newUser);
})

    database.ref().on("child_added", function(childSnapshot, prevChildKey){
        console.log(childSnapshot.val());
      
      var userType = childSnapshot.val().type;
      var userName = childSnapshot.val().name;
      var userEmail = childSnapshot.val().email;
      var userPic = childSnapshot.val().picture;
      var userBio = childSnapshot.val().bio;
      var userZip = childSnapshot.val().zipcode;
      var userInt1 = childSnapshot.val().interest1;
      var userInt2 = childSnapshot.val().interest2;

    });
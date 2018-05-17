(function() {
  console.log("login.js is working");
  var config = {
    apiKey: "AIzaSyASBaPuT5BNt2eXIjn_L4M00q799FbY61o",
    authDomain: "sonrise-b5e2e.firebaseapp.com",
    databaseURL: "https://sonrise-b5e2e.firebaseio.com",
    projectId: "sonrise-b5e2e",
    storageBucket: "sonrise-b5e2e.appspot.com",
    messagingSenderId: "787522362715"
  };
    firebase.initializeApp(config);
    //hide and show modals
    var modal1 =document.getElementById("modal1");
    var returnmodal =document.getElementById("returnmodal");
    var newusermodal =document.getElementById("newusermodal");
    returnmodal.display = "block";
    newusermodal.display = "block";


   
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnLogout');
    
    //Login event
    btnLogin.addEventListener('click', e => {
      //get email
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth()

      //Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));


    });
    
    //Sign up event
    btnSignUp.addEventListener('click', e => {
          //Create  check for real email   
      
      //get email
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth()
 
          //Sign in
          const promise = auth.createUserWithEmailAndPassword(email, pass);
         

          promise
          .then(user => console.log(user))
          .catch(e => console.log(e.message));
    
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser);
          btnLogout.classList.remove('hide');
        } else {
          console.log('not logged in');
        }
    });
    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
    });
  })
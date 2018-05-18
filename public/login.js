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
    function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    };
    
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('returning');
    const btnSignUp = document.getElementById('newuser');
    const auth = firebase.auth()
    //Login event
    if( btnLogin ){
      btnLogin.addEventListener('click', e => {
        //get email
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
  
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.then(function() {
          window.location.href = "index.html";
        })
        promise.catch(e => {
            console.log(e.message);
          window.alert('Error: Please check your email address and password. ' + e.message);
          });
      
  
      });       
    }
    
    if( btnSignUp ){
        //Sign up event
        btnSignUp.addEventListener('click', e => {
          //Create  check for real email   
          
          //get email
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
          
              //Sign in
              const promise = auth.createUserWithEmailAndPassword(email, pass);
              promise.then(function() {
              window.alert("Thanks for signing up!")
              window.location.href = "profile.html";
              })
              promise.catch(e => window.alert(e.message));

        });      
    }

    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser);
          
        } else {
          console.log('not logged in');
        }
    });
    const btnLogout = document.getElementById('logout');
    btnLogout.addEventListener('click', e => {
      console.log(e); 
      const auth = firebase.auth();
      function logOut(){
        auth.signOut();
        window.alert("Signed Out");
        window.location.href = "login.html";
      };

      logOut();
    })
    //firebase is working
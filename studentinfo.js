const firebaseConfig = {
    apiKey: "AIzaSyBCan0Z9YxG9IDmdNdoHghkCOmiD-XYma0",
    authDomain: "ideal-english-medium.firebaseapp.com",
    databaseURL: "https://ideal-english-medium-default-rtdb.firebaseio.com",
    projectId: "ideal-english-medium",
    storageBucket: "ideal-english-medium.appspot.com",
    messagingSenderId: "555143234517",
    appId: "1:555143234517:web:81104420d75e352a4c335c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add(){
    var Username = document.getElementById('Username').value;
    var Class = document.getElementById('class').value;
    var Username1 = document.getElementById('Username1');
    var PASSWORD1 = document.getElementById('Password1');
    if(Username != '' && Class != 'SELECT'){
        var ref = firebase.database().ref('STUDENT/'+Class+'/').child(Username)
        ref.once('value' , function(snapshot){
            var data = snapshot.val();
            var get_username = data.username;
            var get_password = data.password;
         if(get_username != null){
            Username1.style.display = 'block'
            PASSWORD1.style.display = 'block'
            Username1.value ='USERNAME IS:- ' + get_username
            PASSWORD1.value ='PASSWORD IS:- ' + get_password
         }else{
            alert('USER IS NOT IN OUR DATA.')
         }
        });
    }else{
        alert('SOME STRINGS ARE MISSING');
    }
  }
  function get() {firebase.database().ref('STUDENT/'+document.getElementById('class1').value+'/').on('value', function(snapshot) {document.getElementById("get").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    
   //Start code
   row = "<label id='#dddf'>"+'STUDENT NAME:-'+Room_names+"</label><br>";
  
   document.getElementById("get").innerHTML += row;
  //End code
   });});}
   function remove(){
    var get_class = document.getElementById('get_class').value;
    var get_username = document.getElementById('get_username').value;
    if(get_class != 'SELECT THE CLASS' && get_username != ''){
      var ref = firebase.database().ref('STUDENT/'+get_class+'/').child(get_username)
      ref.once('value' , function(snapshot){
          var data = snapshot.val();
          var get_username1 = data.username;
         if(get_username1 == get_username){
          localStorage.setItem('verify' , 'yes');
         }else{
          localStorage.setItem('verify' , 'no');
         }
      });
      setTimeout(function(){
      if(localStorage.getItem('verify') == 'yes'){
        firebase.database().ref('STUDENT/'+get_class+'/').child(get_username).remove();
        alert('GIVEN STUDENT HAS BEEN REMOVED')
        localStorage.removeItem('verify');
      }else{
        localStorage.removeItem('verify');
        alert('USER IS NOT IN OUT DATA')
      }
      },5000)

    }else{
      alert('SOME STRINGS ARE MISSING');
    }
   }
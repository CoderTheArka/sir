

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

  function save(){

	var username = document.getElementById('username').value ;
	var email = document.getElementById('email').value ;
	var password = document.getElementById('password').value ;

   if(username != '' && email != '' && password != ''){
   var Sir = firebase.database().ref('USERS/' + username);
   Sir.once('value' , function(get){
   var data = get.val();
   alert(data.NAME);
   if(data.EMAIL == email && data.NAME == username && data.PASSWORD == password){
	alert('SUCCESSFUL');
   localStorage.setItem('succes' , 'ok')
	window.location = 'student.html'
   }else{
   alert('YOUR USERNAME OR PASSWORD IS INCORRECT');
   }
   });
   }else{
	alert('SOME STRINGS ARE MISSING');
   }
 setTimeout(function(){

 },8000);
  }
  
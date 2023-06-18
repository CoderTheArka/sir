if(localStorage.getItem('succes') != 'ok'){
    window.location = 'index.html';
    }else{
        localStorage.removeItem('succes');
    }
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

  function generate(){
    var class0 = document.getElementById('class').value;
    var username = document.getElementById('Username').value;
    if(username != '' && class0 != ''){
    var password = Math.floor(Math.random() * 1000000000);
    document.getElementById('Password').value = password;
    document.getElementById('add1212').style.display = 'block';
    }
  }

  function add(){

    var class0 = document.getElementById('class').value;
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    var ref = firebase.database().ref('STUDENT/'+class0+'/').child(username)
    ref.once('value' , function(snapshot){
        var data = snapshot.val();
        var get_username = data.username;
       if(get_username == username){
        localStorage.setItem('verify' , 'no');
       }else{
        localStorage.setItem('verify' , 'yes');
       }
    });
    setTimeout(function(){
if(localStorage.getItem('verify') != 'no'){
    if(username != '' && password != ''){
        if(class0 != 'SELECT THE CLASS'){
           firebase.database().ref('STUDENT/'+class0+'/').child(username).update({
           username:username,
           password:password,
           class:class0
           });
           alert('STUDESENT IS ADDED');
           document.getElementById('class').value = 'SELECT';
           document.getElementById('Username').value = 'ENTER THE NAME';
            document.getElementById('Password').value = '';
            document.getElementById('add1212').style.display = 'none';
        }else{
            alert('PLEASE SELECT CLASS')

        }
    }else{
        alert('SOME STRINGS ARE EMPTY')
                    document.getElementById('class').innerHTML = '';
                    document.getElementById('Username').innerHTML = '';
                     document.getElementById('Password').innerHTML = '';
    
    }
    localStorage.removeItem('verify');
}else{
    localStorage.removeItem('verify');
    alert('User Is Already In Our Records')
    document.getElementById('add1212').style.display = 'none';
    document.getElementById('Password').value = '';
}
    },'5000')
    
  }
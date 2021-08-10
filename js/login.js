$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});





  function logindat() {
  

  var databaseRef = firebase.database().ref('admin/');
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
  /*
  childData.gui_name
  childKey
  */
 	if (document.getElementById('user').value==childData.user && document.getElementById('passwd').value==childData.passwd) {
 		sessionStorage.setItem('user', childData.user);
 		sessionStorage.setItem('passwd', childData.passwd);
 		alert("bienvenido "+childData.user);
 		window.location.href = "data.html";
 	}

    });
  });
  }
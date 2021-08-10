  var config = {
    apiKey: "AIzaSyA1dl2qsAdifFMgKaJzFlnpNBFdd0zhyxE",
    authDomain: "byfone-4ebd3.firebaseapp.com",
    databaseURL: "https://byfone-4ebd3-default-rtdb.firebaseio.com",
    projectId: "byfone-4ebd3",
    storageBucket: "byfone-4ebd3.appspot.com",
    messagingSenderId: "563826150449",
    appId: "1:563826150449:web:3cec6635da3329d3335910",
    measurementId: "G-T7TQGJMMWG"
   };

   firebase.initializeApp(config);


		var id;
		var nombre;


function crear(child,data) {
	var uid = firebase.database().ref().child(child).push().key;
  	update(uid,child,data);
   console.log('Usuario creado');
   //reload_page();
}
function update(id,child,data) {
   var updates = {};
   updates['/'+child+'/' + id] = data;
   firebase.database().ref().update(updates);
   console.log("acualizado correctamente");
   //alert('actualizado correctamente');
}

function eliminar(id,child) {
   firebase.database().ref().child('/'+child+'/' + id).remove();
   window.location.href = "data.html";
}
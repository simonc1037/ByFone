  // Initialize Firebase
  



    // estructura de las colecciones /////



function send() {

  var First_name = document.getElementById('First_name');
  var last_name = document.getElementById('last_name');
  var Company = document.getElementById('Company');
  var Email = document.getElementById('Email');
  var Phone = document.getElementById('Phone');
  var textarea = document.getElementById('textarea');
  var sh1 = document.getElementById('sh1');
  var sh2 = document.getElementById('sh2');
  var sh3 = document.getElementById('sh3');
  var sh4 = document.getElementById('sh4');
  var sh5 = document.getElementById('sh5');
  var sh6 = document.getElementById('sh6');
  var sh7 = document.getElementById('sh7');
  var skd1 = "none";
  var skd2 = "none";
  var skd3 = "none";
  var skd4 = "none";
  var skd5 = "none";
  var skd6 = "none";
  var skd7 = "none";

  if (sh1.checked == true) {
    skd1 = sh1.value;
  }
  if (sh2.checked == true) {
    skd2 = sh2.value;
  }
  if (sh3.checked == true) {
    skd3 = sh3.value;
  }
  if (sh4.checked == true) {
    skd4 = sh4.value;
  }
  if (sh5.checked == true) {
    skd5 = sh5.value;
  }
  if (sh6.checked == true) {
    skd6 = sh6.value;
  }
  if (sh7.checked == true) {
    skd7 = sh7.value;
  }


  crear("contact",contact(First_name.value,last_name.value,Company.value,Email.value,document.getElementById('pais').value+""+Phone.value,textarea.value,skd1,skd2,skd3,skd4,skd5,skd6,skd7));

  First_name.value ="";
  last_name.value ="";
  Company.value ="";
  Email.value ="";
  Phone.value ="";
  textarea.value ="";
  First_name.value ="";
  First_name.value ="";
  First_name.value ="";
  First_name.value ="";
  $("#sh1").prop("checked", false);
  $("#sh2").prop("checked", false);
  $("#sh3").prop("checked", false);
  $("#sh4").prop("checked", false);
  $("#sh5").prop("checked", false);
  $("#sh6").prop("checked", false);
  $("#sh7").prop("checked", false);

}



function Cargar_Datos() {
  var databaseRef = firebase.database().ref('contact/');
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
  /*
  childData.gui_name
  childKey
  */
  var query = "";

   if (childData.sh1 != "none") {
    query+=childData.sh1+",";
   }
   if (childData.sh2 != "none") {
    query+=childData.sh2+",";
   }
   if (childData.sh3 != "none") {
    query+=childData.sh3+",";
   }
   if (childData.sh4 != "none") {
    query+=childData.sh4+",";
   }
   if (childData.sh5 != "none") {
    query+=childData.sh5+",";
   }
   if (childData.sh6 != "none") {
    query+=childData.sh6+",";
   }
   if (childData.sh7 != "none") {
    query+=childData.sh7+",";
   }


 document.getElementById('tabla').innerHTML+=Campo_Tabla(childData.First_name,childData.last_name,childData.Company,childData.Email,childData.Phone,childData.textarea,query,childKey);


 
    });
  });
  
}


function Campo_Tabla(fn,ln,cp,em,ph,msg,sv,ck) {
  return `
          <tr>
            <td>${fn}</td>
            <td>${ln}</td>
            <td>${cp}</td>
            <td>${em}</td>
            <td>${ph}</td>
            <td>${msg}</td>
            <td>${sv}</td>
            <td><button class="btn waves-effect waves-light" onclick="remove_contact('${ck}')" style="background-color: #258DCC" name="action">Delete&nbsp;Entry</button></td>
          </tr>
  `;
}

 function incializar() {

 if (sessionStorage.getItem('user')== 'null') {
    window.location.href = "login.html";
  }else{
    Cargar_Datos();
  }

  console.log("load");

  console.log(sessionStorage.getItem('user'));
}

 function cerrar() {
    sessionStorage.setItem('user', 'null');
    sessionStorage.setItem('passwd', 'null');
    window.location.href = "login.html";

}


function contact(fn,ln,cp,em,ph,txt,sh1,sh2,sh3,sh4,sh5,sh6,sh7) {

  var data = {
    First_name: fn,
    last_name: ln,
    Company: cp,
    Email: em,
    Phone: ph,
    textarea: txt,
    sh1: sh1,
    sh2: sh2,
    sh3: sh3,
    sh4: sh4,
    sh5: sh5,
    sh6: sh6,
    sh7: sh7
   }

return data;
}


function email() {

  window.open('mailto:support@byfone.com', '_blank');
}

function remove_contact(id) {
  eliminar(id,"contact");
}
// final de la estructura ///////



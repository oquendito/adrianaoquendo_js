//inicio de sesion de usuario
$('#accept').click(function() {
  if ($('#buybtn').is(':disabled')) {
  $('#buybtn').removeAttr('disabled');
} else {
  $('#buybtn').attr('disabled', 'disabled');
}
});

function userNameEntered() {
  var user = document.forms["user"]["name"].value;
  document.getElementById("Name").innerHTML = "Bienvenid@ " + user + "!";
  return false;
}

function getValue(){
  var x=document.getElementById("inicioSesion");
  alert(x.innerHTML);
}

function getDB(){
  try{
      if(typeof window.baseDatos == typeof undefined || window.baseDatos == null){
          window.baseDatos = [];
      }   
      return window.baseDatos;
  }catch(error){
      console.error(error);
  }
}

class Persona {
  constructor(usuario, password) {
      this.usuario  = usuario;
      this.password = password;
  }
  almacenar(){
      try{
          let db = getDB(),
              amount = db.length;
          return amount < (this.agregar(new Persona(this.usuario,this.password))).length;
      }catch(error){
          console.error(error);
      }
  }
  agregar(persona){
      (getDB()).push(persona);
      return baseDatos;
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById('button').addEventListener("click", function(event) { 
      let user = new Persona(document.getElementById("usuario").value, document.getElementById("password").value);
      if(user.almacenar()){
          alert(`Usuario guardado correctamente. Cantidad de usuarios registrados: ${(getDB()).length}`);
      }else{
          console.error('No se guardo');
      }
  });
});

confirmacionDeAcceso()

/*let afirmacion = prompt("Desea ingresar al sitio?");

if(afirmacion ="Si"){
        alert("Inicie sesión");
}

function login(){
  let form = document.form;
  let user = form.usuario.value;
  let pass = form.contraseña.value;

  if(user == "Seba" && pass == "coderhouse"){
    alert("bienvenido Seba!");
  }else{
    alert("datos incorrectos");
  }
} 
 
let user = {
  name: "Seba",
  location: "Argentina",
  login: function() {
    console.log("the user logged in! :)");
  }
};

console.log(user);

class User {
  constructor(name,email,pass) {
      this.name = name;
      this.email = email;
      this.pass = window.btoa(unescape(encodeURIComponent( pass )));
      console.log(this);
  }
  login(pass){
      return this.pass == window.btoa(unescape(encodeURIComponent( pass ))) ;
  }
}
let user_name  = prompt('Ingresa el nombre'),
  user_email = prompt('Ingresa el correo'),
  user_pass  = prompt('Ingresa la clave'),
  user = new User(user_name,user_email,user_pass);
if(user.login(prompt("ingresa la clave"))){
  console.log('Login valido');
}else{
  console.log('clave incorrecta');
}*/

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

localStorage.setItem('usuario', 'password');
localStorage.setItem('usuario', JSON.stringify(this.usuario));

/*let arrayUsuarios = [];
let formulario = document.querySelector("#formulario")
let inputUsuario = document.querySelector("#iUsuario");

let usuarioI = formulario.children[1].value;
let passwordI = formulario.children[5].value;

let contenedor = document.querySelector("#usuarioIngresado");
let mostrarTodos = document.querySelector("#mostrarTodos");
let parrafo = mostrarTodos.getElementsByTagName("p");
let bandera = false;

formulario.addEventListener("submit" , agregarUsuario);
btnMostrar.addEventListener("click" , MostrarUsuarios);

inputUsuario.focus();

function MostrarUsuarios(e) {
        e.preventDefault();
        let i = 0;
        mostrarTodos.innerHTML = '<h3< Lista de Usuarios:</h3>';
        for (const usuario of arrayUsuarios){
        mostrarTodos.innerHTML += `
      <p><strong> Usuario:</strong> ${usuarioI}</p>
      <p><strong> Password: </strong> ${passwordI}</p>
      <hr>`;
        }
      }
      function agregarAlDom() {
    contenedor.innerHTML = `<h3>Ultimo inicio de sesion</h3>
  <p><strong> Usuario:</strong> ${usuarioI}</p>
  <p><strong> Password: </strong> ${passwordI}</p>
  <hr>`;
}*/


var cuentas = [
  {nombre: "Mali", saldo: 200, password: 1234},
  {nombre: "Gera", saldo: 290, password: 5678},
  {nombre: "Maui", saldo: 60, password: 9999}
];
var SaldoActual =0;

  //INICIO DE SECCION
function InicioUsuario() {
  const usuarioIngresado = document.getElementById("UsuarioIngresar").value.toLowerCase();
  const claveIngresada = document.getElementById("ContraseniaIngresar").value;
  let usuarioEncontrado = false;
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre.toLowerCase() === usuarioIngresado && cuentas[i].password == claveIngresada) {
      usuarioEncontrado = true;
      break;
    }
  }
  if (usuarioEncontrado) {
    if (window.location.pathname.endsWith("index.html")) {
      window.location.href = "html/seccionDelUsuario.html";
    } else {
      window.location.href = "seccionDelUsuario.html";
    }
    sessionStorage.setItem("usuarioActivo", usuarioIngresado);
  } else {
    alert("Credenciales inválidas, por favor inténtalo de nuevo.");
  }
}
  // CERRAR SECCIÓN
function CerrarUsuario() {
  sessionStorage.clear();
  window.location.href = "../index.html";
}
  // VER SALDO DEL USUARIO
function VerSaldo() {
  document.querySelector(".seccionver").style.display = "block";
  document.querySelector(".seccionagregar").style.display = "none";
  document.querySelector(".seccionretirar").style.display = "none";
  const usuarioIngresado = sessionStorage.getItem("usuarioActivo");
  let saldoUsuario = 0;
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre.toLowerCase() === usuarioIngresado) {
      saldoUsuario = cuentas[i].saldo;
      break;
    }
  }
  const mensajeSaldo = document.getElementById("SaldoUsuario");
  const mensajeSaldo2 = document.getElementById("SaldoUsuario2");
  const mensajeSaldo3 = document.getElementById("SaldoUsuario3");
  mensajeSaldo.innerHTML = "";
  mensajeSaldo.appendChild(document.createTextNode(`$${saldoUsuario}`));
  mensajeSaldo2.innerHTML = "";
  mensajeSaldo2.appendChild(document.createTextNode(`$${saldoUsuario}`));
  mensajeSaldo3.innerHTML = "";
  mensajeSaldo3.appendChild(document.createTextNode(`$${saldoUsuario}`));
} 

  // AGREGAR SALDO
function SaldoIngreso(){
  const usuarioIngresado = sessionStorage.getItem("usuarioActivo");
  let saldoIngresado = parseFloat(document.getElementById("AgregaSaldo").value);
  let cuenta;
  if (!saldoIngresado) {
    document.getElementById("SaldoUsuario2").innerHTML = "Debes ingresar un valor en el campo de saldo.";
    return;
  }
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre.toLowerCase() === usuarioIngresado) {
      cuenta = cuentas[i];
      break;
    }
  } 
  if (saldoIngresado < 10) {
    SaldoUsuario2.innerHTML = "El saldo ingresado debe ser mayor o igual a $10.";
  } else if ((cuenta.saldo + saldoIngresado) > 990) {
    SaldoUsuario2.innerHTML = "Sobrepasa el monto permitido por el banco. Ingresa un valor inferior.";
  } else {
    cuenta.saldo += saldoIngresado;
    SaldoActual = cuenta.saldo; 
    const mensajeConfirmacion = "El saldo ha sido actualizado con éxito. " + cuenta.nombre + " Tu nuevo saldo es $" + SaldoActual;
    document.getElementById("SaldoUsuario2").innerHTML = mensajeConfirmacion;
    const saldoUsuarioElement = document.getElementById("SaldoUsuario");
    saldoUsuarioElement.innerHTML = `$${SaldoActual}`;
    document.getElementById("AgregaSaldo").value="";
  }
}
  // RETIRAR SALDO
function SaldoRetiro() {
  const usuarioIngresado = sessionStorage.getItem("usuarioActivo");
  let saldoRetirar = parseFloat(document.getElementById("RetirarSaldo").value);
  let cuentaRetirar;
  if (!saldoRetirar) {
    document.getElementById("SaldoUsuario3").innerHTML = "Debes ingresar un valor en el campo de saldo.";
    return;
  }
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre.toLowerCase() === usuarioIngresado) {
      cuentaRetirar = cuentas[i];
      break;
    }
  } 
  if (saldoRetirar < 10) {
    SaldoUsuario3.innerHTML = "El saldo ingresado debe ser mayor o igual a $10.";
  } else if ((cuentaRetirar.saldo - saldoRetirar) < 0) {
    SaldoUsuario3.innerHTML = "Saldo insuficiente para realizar esta operación.";
  } else {
    cuentaRetirar.saldo -= saldoRetirar;
    SaldoActual = cuentaRetirar.saldo; 
    const mensajeConfirmacion = "El saldo ha sido actualizado con éxito. " + cuentaRetirar.nombre + ", tu nuevo saldo es $" + SaldoActual;
    document.getElementById("SaldoUsuario3").innerHTML = mensajeConfirmacion;
    const SaldoUsuarioRetiro = document.getElementById("SaldoUsuario");
    SaldoUsuarioRetiro.innerHTML = `$${SaldoActual}`;
    document.getElementById("RetirarSaldo").value="";
  }
}
  // FUNCION PARA OCULTAR SECCIONES
function IngreseSaldo() {
  document.querySelector(".seccionagregar").style.display = "block";
  document.querySelector(".seccionretirar").style.display = "none";
  document.querySelector(".seccionver").style.display = "none";
}
function RetirarSaldo() {
  document.querySelector(".seccionretirar").style.display = "block";
  document.querySelector(".seccionver").style.display = "none";
  document.querySelector(".seccionagregar").style.display = "none";
}
 // FUNCION PARA CANCELAR
function CancelarAccion() {
  document.querySelector(".seccionver").style.display = "block";
  document.querySelector(".seccionagregar").style.display = "none";
  document.querySelector(".seccionretirar").style.display = "none";
  const usuarioIngresado = sessionStorage.getItem("usuarioActivo");
  let saldoUsuario = 0;
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre.toLowerCase() === usuarioIngresado) {
      saldoUsuario = cuentas[i].saldo;
      break;
    }
  }
  const mensajeSaldo = document.getElementById("SaldoUsuario");
  mensajeSaldo.innerHTML = "";
  mensajeSaldo.appendChild(document.createTextNode(`$${saldoUsuario}`));
  document.getElementById("AgregaSaldo").value="";
}
function CancelarAccion2() {
  document.querySelector(".seccionver").style.display = "block";
  document.querySelector(".seccionagregar").style.display = "none";
  document.querySelector(".seccionretirar").style.display = "none";
  const usuarioIngresado = sessionStorage.getItem("usuarioActivo");
  let saldoUsuario = 0;
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].nombre.toLowerCase() === usuarioIngresado) {
      saldoUsuario = cuentas[i].saldo;
      break;
    }
  }
  const mensajeSaldo = document.getElementById("SaldoUsuario");
  mensajeSaldo.innerHTML = "";
  mensajeSaldo.appendChild(document.createTextNode(`$${saldoUsuario}`));
  document.getElementById("RetirarSaldo").value="";
}
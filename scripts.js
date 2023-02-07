//Variables para ingreso a loaggin
var cuentas = [
    {nombre: "Mali", saldo: 200, password: 1234},
    {nombre: "Gera", saldo: 290, password: 5678},
    {nombre: "Maui", saldo: 60, password: 9999}
];
var SaldoActual = 0;

function IngresoUsuarios() {
const usuarioIngresado = document.getElementById("UsuarioIngresada").value;
const claveIngresada = document.getElementById("ClaveIngresada").value;
let usuarioEncontrado = false;
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioIngresado && cuentas[i].password == claveIngresada) {
            usuarioEncontrado = true;
            break;
        }
    }if (!usuarioEncontrado) {
        document.getElementById("ErrorMensaje").innerHTML = "Por favor ingrese un usuario y clave válidos";
    } else {
        document.getElementById("Bienvenida").style.display = "none";
        document.getElementById("CajeroSaldo").style.display = "block";
    }
}
//VER EL SALDO QUE TIENE ACTUAL
function VerSaldo(){
    document.getElementById("SaldoActual").style.display = "inherit";
    document.getElementById("CajeroSaldo").style.display = "none";
    let saldoUsuario = 0;
    const usuarioIngresado = document.getElementById("UsuarioIngresada").value;

    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioIngresado) {
            saldoUsuario = cuentas[i].saldo;
            break;
        }
    }
    const mensajeSaldo = document.getElementById("SaldoUsuario");
    mensajeSaldo.innerHTML = ""; 
    mensajeSaldo.appendChild(document.createTextNode(`$${saldoUsuario}`));
}
//FUNCION PARA AGREGAR EL SALDO Y VALIDAR EL SALOD ACTUALIZADO
function IngreseSaldo() {
    document.getElementById("SaldoAgregado").style.display = "inherit";
    document.getElementById("CajeroSaldo").style.display = "none";
}
//RECIBE EL SALDO QUE EL CLIENTE QUIERE AGREGAR 
function checkSaldo(IngresoSaldo, SaldoActual) {
    for (var i = 0; i < cuentas.length; i++) {
      if (cuentas[i].nombre === "Mali") {
        SaldoActual = cuentas[i].saldo;
        break;
      }else if (cuentas[i].nombre === "Gera") {
        SaldoActual = cuentas[i].saldo;
        break;
      }else if (cuentas[i].nombre === "Muai") {
        SaldoActual = cuentas[i].saldo;
        break;
      }
    }
    if (IngresoSaldo < 10) {
      const mensajeError = document.createTextNode("El saldo ingresado debe ser mayor o igual a $10.");
      const MensajeUsuario = document.getElementById("SaldoMuyAlto");
      MensajeUsuario.innerHTML = "";
      MensajeUsuario.appendChild(mensajeError);
    } else if ((IngresoSaldo + SaldoActual) > 990) {
      const mensajeError = document.createTextNode("Sobrepasa el monto permitido por el banco. Ingresa un valor inferior.");
      const MensajeUsuario = document.getElementById("SaldoMuyAlto");
      MensajeUsuario.innerHTML = "";
      MensajeUsuario.appendChild(mensajeError);
    } else if ((IngresoSaldo + SaldoActual) < 10) {
      const mensajeError = document.createTextNode("El saldo actualizado debe ser mayor o igual a $10.");
      const MensajeUsuario = document.getElementById("MontoAgregado");
      MensajeUsuario.innerHTML = "";
      MensajeUsuario.appendChild(mensajeError);
    } else {
      const MensajeConfirmacion = document.createTextNode("El saldo ha sido actualizado con éxito. Tu saldo actual es " + (IngresoSaldo + SaldoActual));
      const MensajeUsuario = document.getElementById("MontoAgregado");
      MensajeUsuario.innerHTML = "";
      MensajeUsuario.appendChild(MensajeConfirmacion);
      cuentas[i].saldo += IngresoSaldo;
    }
  }
  
  function SaldoInput() {
    const IngresoSaldo = parseInt(document.getElementById("AgregarSaldo").value);
    checkSaldo(IngresoSaldo, SaldoActual);
  }



/*function SaldoInput(IngresoSaldo) {
const IngresoSaldo = parseInt(document.getElementById("AgregarSaldo").value);
    if (IngresoSaldo < 10) {
      const mensajeError = document.createTextNode("El saldo ingresado debe ser mayor o igual a $10.");
      const MensajeUsuario = document.getElementById("SaldoMuyAlto");
      mensajeUsuario.innerHTML = "";
      mensajeUsuario.appendChild(mensajeError);
    } else if ((IngresoSaldo + SaldoActual) > 990) {
      const mensajeError = document.createTextNode("Sobrepasa el monto permitido por el banco. Ingresa un valor inferior.");
      const mensajeUsuario = document.getElementById("SaldoMuyAlto");
      mensajeUsuario.innerHTML = "";
      mensajeUsuario.appendChild(mensajeError);
    } else if ((IngresoSaldo + SaldoActual) < 10) {
      const mensajeError = document.createTextNode("El saldo actualizado debe ser mayor o igual a $10.");
      const MensajeUsuario = document.getElementById("MontoAgregado");
      MensajeUsuario.innerHTML = "";
      MensajeUsuario.appendChild(mensajeError);
    } else {
      checkSaldo(IngresoSaldo, SaldoActual);
    }
}*/
  
  
  
  

// Retirar Saldo
function retirarSaldo () {
    document.getElementById("CajeroSaldo").style.display = "none";
    document.getElementById("retirarSaldo").style.display = "inherit";
}

// Recibe el saldo ingresado por el cliente y lo envía a la función para revisar si sobrepasa el monto. 
function inputSaldoRetiro () {
    const saldoIngresado = parseInt(document.getElementById ("saldoIngresadoRetirar").value);
    checkSaldoRetirar (saldoIngresado);
}

// Valida el monto ingresado.
/*function checkSaldoRetirar (saldoIngresado) {
    console.log (saldoIngresado);
    console.log (saldoActual);
    if ((saldoActual - saldoIngresado) < 10){
        const mensajeError = document.createTextNode ("Debes dejar mínimo $10 en tu cuenta. Ingresa un valor inferior.")
        const mensajeUsuario = document.getElementById ("alertaCupoRetiro");
        mensajeUsuario.innerHTML = "";
        mensajeUsuario.appendChild (mensajeError);
    } else {
        mostrarTransacciónRetiro (saldoIngresado, saldoActual);
    }
}

function mostrarTransacciónRetiro (saldoIngresado, saldoActual) {
    document.getElementById("retirarSaldo").style.display = "none";
    document.getElementById("SaldoTotal").style.display = "inherit";

    const dineroIngresado = document.createTextNode (`$${saldoIngresado}`);
    const mostrarDinero = document.getElementById("saldoIngresadoCliente");
    mostrarDinero.innerHTML = "";
    mostrarDinero.appendChild (dineroIngresado);

    const dinerototal = document.createTextNode (`$${(saldoActual - saldoIngresado)}`);
    const mostrarTotal = document.getElementById ("saldoTotalCliente");
    mostrarTotal.innerHTML = "";
    mostrarTotal.appendChild (dinerototal);
}

//FUNCION PARA RETROCEDER
*/
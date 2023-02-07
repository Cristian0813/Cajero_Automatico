//Variables para ingreso a loaggin
/*let Malisaldo = 200;
let Gerasaldo = 290;
let Mauisaldo = 60;*/
var cuentas = [
    {nombre: "Mali", saldo:Malisaldo = 200, password: 1234},
    {nombre: "Gera", saldo:Gerasaldo = 290, password: 5678},
    {nombre: "Maui", saldo:Mauisaldo = 60, password: 9999}
];

function IngresoUsuarios() {
const usuarioIngresado = document.getElementById("UsuarioIngresada").value;
const claveIngresada = document.getElementById("claveIngresada").value;
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
function verSaldo(){
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
// Ingresar Saldo
function ingresarSaldo () {
    document.getElementById("CajeroSaldo").style.display = "none";
    document.getElementById("agregarSaldo").style.display = "inherit";
}

// Recibe el saldo ingresado por el cliente y lo envía a la función para revisar si sobrepasa el monto. 
function inputSaldo () {
    const saldoIngresado = parseInt(document.getElementById ("saldoIngresado").value);
    checkSaldo (saldoIngresado);
}

// Valida el monto ingresado.
function checkSaldo (saldoIngresado) {
    if ((saldoIngresado + saldoActual) > 990){
        const mensajeError = document.createTextNode ("Sobrepasa el monto permitido por el banco. Ingresa un valor inferior.")
        const mensajeUsuario = document.getElementById ("alertaCupo");
        mensajeUsuario.innerHTML = "";
        mensajeUsuario.appendChild (mensajeError);
    } else {
        mostrarTransacción (saldoIngresado, saldoActual);
    }
}

// Muestra la pantalla con el saldo del cliente
function mostrarTransacción (saldoIngresado, saldoActual) {
    document.getElementById("agregarSaldo").style.display = "none";
    document.getElementById("SaldoTotal").style.display = "inherit";

    const dineroIngresado = document.createTextNode (`$${saldoIngresado}`);
    const mostrarDinero = document.getElementById("saldoIngresadoCliente");
    mostrarDinero.innerHTML = "";
    mostrarDinero.appendChild (dineroIngresado);

    const dinerototal = document.createTextNode (`$${(saldoIngresado + saldoActual)}`);
    const mostrarTotal = document.getElementById ("saldoTotalCliente");
    mostrarTotal.innerHTML = "";
    mostrarTotal.appendChild (dinerototal);
}

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
function checkSaldoRetirar (saldoIngresado) {
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

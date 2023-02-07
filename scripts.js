//Variables para ingreso a loaggin
var cuentas = [
    {nombre: "Mali", saldo: 200, password: 1234},
    {nombre: "Gera", saldo: 290, password: 5678},
    {nombre: "Maui", saldo: 60, password: 9999}
];
let SaldoActual = 0;
//INGRESO DE USUARIO Y CONTRASENHA
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
function checkSaldo(IngresoSaldo, SaldoActual) {
    const usuarioIngresado = document.getElementById("UsuarioIngresada").value;
    const mensajeUsuario = document.getElementById("SaldoMuyAlto");
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioIngresado) {
            saldoUsuario = cuentas[i].saldo;
            break;
        }
    }
    if (IngresoSaldo < 10) {
        mensajeUsuario.innerHTML = "El saldo ingresado debe ser mayor o igual a $10.";
    } else if ((IngresoSaldo + SaldoActual) > 990) {
        mensajeUsuario.innerHTML = "Sobrepasa el monto permitido por el banco. Ingresa un valor inferior.";
    } else if ((IngresoSaldo + SaldoActual) < 10) {
        mensajeUsuario.innerHTML = "El saldo actualizado debe ser mayor o igual a $10.";
    } else {
        const mensajeConfirmacion = "El saldo ha sido actualizado con éxito. "+ (cuentas[i].nombre) +" Tu saldo actual es "+  (cuentas[i].saldo += IngresoSaldo);
        document.getElementById("MontoAgregado").innerHTML = mensajeConfirmacion;

    }
}
function SaldoInput() {
    const ingresoSaldo = parseInt(document.getElementById("AgregarSaldo").value);
    checkSaldo(ingresoSaldo);
    ingresoSaldo.innerHTML ="";
}
//RETIRAR SALDO
function RetirarSaldo () {
    document.getElementById("CajeroSaldo").style.display = "none";
    document.getElementById("SaldoRetirado").style.display = "inherit";
}
function checkSaldo(RetiroSaldo, SaldoActual) {
    const usuarioIngresado = document.getElementById("UsuarioIngresada").value;
    const mensajeUsuario = document.getElementById("SaldoMuyAlto");
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === usuarioIngresado) {
            saldoUsuario = cuentas[i].saldo;
            break;
        }
    }
    if (RetiroSaldo < 10) {
        mensajeUsuario.innerHTML = "El saldo ingresado debe ser mayor o igual a $10.";
    } else if ((RetiroSaldo - SaldoActual) > 990) {
        mensajeUsuario.innerHTML = "Sobrepasa el monto permitido por el banco.";
    } else if ((RetiroSaldo - SaldoActual) < 10) {
        mensajeUsuario.innerHTML = "El saldo actualizado debe ser mayor o igual a $10.";
    } else {
        const mensajeConfirmacion = "El saldo ha sido actualizado extiosamente. "+ (cuentas[i].nombre) +" tu saldo actual es "+  (cuentas[i].saldo -= RetiroSaldo);
        document.getElementById("SaldoNegativo").innerHTML = mensajeConfirmacion;
    }
}
function SaldoRetiro() {
    const ingresoSaldo = parseInt(document.getElementById("NegativoSaldo").value);
    checkSaldo(ingresoSaldo);
    ingresoSaldo.innerHTML ="";
}

//FUNCIÓN PARA REGRESAR AL MENÚ ANTERIOR
function Retoceder() {
    document.getElementById("SaldoAgregado").style.display = "none";
    document.getElementById("CajeroSaldo").style.display = "inherit";
}

//FUNCIÓN PARA CANCELAR LA OPERACIÓN
function Cancelar() {
    document.getElementById("SaldoAgregado").style.display = "none";
    document.getElementById("CajeroSaldo").style.display = "inherit";
    document.getElementById("AgregarSaldo").value = "";
}
// Recibe el saldo ingresado por el cliente y lo envía a la función para revisar si sobrepasa el monto. 
function inputSaldoRetiro () {
    const SaldoCero = parseInt(document.getElementById ("saldoIngresadoRetirar").value);
    checkSaldoRetirar (SaldoCero);
}
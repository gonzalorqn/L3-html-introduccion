"use strict";
function Saludar() {
    var nombre = document.getElementById("txtNombre").value;
    var edad = document.getElementById("txtEdad").value;
    alert("Su nombre es " + nombre + " y tiene " + edad + " a&ntilde;os.");
    console.log("Su nombre es " + nombre + " y tiene " + edad + " a&ntilde;os.");
    document.getElementById("div").innerHTML = "Su nombre es " + nombre + " y tiene " + edad + " a&ntilde;os.";
}
//# sourceMappingURL=Ejercicio.js.map
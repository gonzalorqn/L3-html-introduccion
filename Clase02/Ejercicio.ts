function Saludar():void
{
  let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
  let edad : string = (<HTMLInputElement> document.getElementById("txtEdad")).value;
  alert("Su nombre es " + nombre + " y tiene " + edad + " a&ntilde;os.");
  console.log("Su nombre es " + nombre + " y tiene " + edad + " a&ntilde;os.");

  (<HTMLDivElement> document.getElementById("div")).innerHTML = "Su nombre es " + nombre + " y tiene " + edad + " a&ntilde;os.";
}

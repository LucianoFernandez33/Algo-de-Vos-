let carrito = []; 
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    document.getElementById("contador").innerHTML = carrito.length;
  }
// Al terminar la compra se borran los datos del LocalStorage y el numero de productos mostrados en "Carrito de Compras"
let correo = document.getElementById('#email').value;
let username = document.getElementById('#nombre').value;
let documentperson = document.getElementById('#dni').value;
let lastName = document.getElementById('#apellido').value;
let phone = document.getElementById('#telefono').value;
let adress = document.getElementById('#direccion').value;
let adressnumb = document.getElementById('#numDireccion').value;
let state = document.getElementById('#provincia').value;
let stateCod= document.getElementById('#codPostal').value;
let titName = document.getElementById('#nombTitular').value;
let tarjetNumber = document.getElementById('#numTarjeta').value;
let monthsExp = document.getElementById('#vencimientoMes').value;
let yearExp = document.getElementById('#vencimientoAño').value;
let segurCode = document.getElementById('#codSeguridad').value;

  function validarFormulario() {
        if (correo.value() !="" && username.value() !="" && documentperson.value() !="" && lastName.value() !="" && phone.value() !="" && adress.value() !="" && adressnumb.value() !="" && state.value() !="" && stateCod.value() !="" && titName.value() !="" && tarjetNumber.value() !="" && monthsExp.value() !="" && yearExp.value() !="" && segurCode.value() !="") {
            $("#containerOculto").show();
        } else {
            alert("complete los campos requeridos")
        };
    }
  function ocultarFormulario(){
    $("#sectionFormulario").fadeOut()
   };
  
   function terminarCompra() {
      validarFormulario();  
      const nuevoCarrito = [];
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      carrito = nuevoCarrito;
      sessionStorage.clear();
      document.getElementById("contador").innerHTML = 0;
      ocultarFormulario();
      //document.getElementById("productosSeleccionados").innerHTML = "";
       
    };
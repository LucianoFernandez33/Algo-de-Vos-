let carrito = []; 
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    document.getElementById("contador").innerHTML = carrito.length;
  }

let correo = document.getElementById('email');
let username =document.getElementById('nombre');
let documentperson = document.getElementById('dni');
let lastName = document.getElementById('apellido');
let phone = document.getElementById('telefono');
let adress = document.getElementById('direccion');
let adressnumb = document.getElementById('numDireccion');
let state = document.getElementById('provincia');
let stateCod= document.getElementById('codPostal');
let titName = document.getElementById('nombTitular');
let tarjetNumber = document.getElementById('numTarjeta');
let monthsExp = document.getElementById('vencimientoMes');
let yearExp = document.getElementById('vencimientoAño');
let segurCode = document.getElementById('codSeguridad');

let error = document.getElementById('error');

  //function validarFormulario() {
  

  //      return false;
  //  };

    var form = document.getElementById('containerform');
        form.addEventListener('submit', function(evt){
          evt.preventDefault()
          //console.log('Enviando formulario');
          
          var mensajeError = [];
        
        if (correo.value === null || correo.value ===''){
          mensajeError.push ('Ingresa tu email');
        }
        if (username.value === null || username.value ===''){
          mensajeError.push ('Ingresa tu nombre');
        }
        if (documentperson.value === 0 || documentperson.value === ''){
          mensajeError.push ('Ingresa tu numero de documento');
        }
        if (lastName.value === null || lastName.value ===''){
          mensajeError.push ('Ingresa tu Apellido');
        }
        if (phone.value === null || phone.value ===''){
          mensajeError.push ('Ingresa tu número de telefono');
       }
        if (adress.value === null || adress.value ===''){
          mensajeError.push ('Ingresa tu dirección');
        }
        if (adressnumb.value === null || adressnumb.value ===''){
          mensajeError.push ('Ingresa tu número de dirección');
        }
        if (state.value === null || state.value ===''){
          mensajeError.push ('Ingresa tu provincia');
        }
        if (stateCod.value === null || stateCod.value ===''){
          mensajeError.push ('Ingresa el  código postal');
        }
        if (titName.value === null || titName.value ===''){
          mensajeError.push ('Ingresa tu nombre del titular de la tarjeta');
        }
        if (tarjetNumber.value === null || tarjetNumber.value ===''){
          mensajeError.push ('Ingresa el número de la tarjeta');
        }
        if (monthsExp.value === null || monthsExp.value ===''){
          mensajeError.push ('Ingresa el mes de vencimiento de la tarjeta');
         }
        if (yearExp.value === null || yearExp.value ===''){
          mensajeError.push ('Ingresa el año de vencimiento de la tarjeta');
        }
        if (segurCode.value === null || segurCode.value ===''){
          mensajeError.push ('Ingresa el código de seguridad de la tarjeta');
        }
        
        error.innerHTML = mensajeError.join(' , ');
        });

  // Al terminar la compra se borran los datos del LocalStorage y el numero de productos mostrados en "Carrito de Compras"

  function ocultarFormulario(){
    $("#sectionFormulario").fadeOut()
   };
  
   
   function terminarCompra() {
      //validarFormulario();  
      const nuevoCarrito = [];
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      carrito = nuevoCarrito;
      sessionStorage.clear();
      document.getElementById("contador").innerHTML = 0;
      ocultarFormulario();
      $("#containerOculto").show();
      //document.getElementById("productosSeleccionados").innerHTML = "";  
    };
let carrito = []; 

 // Agregando productos al carrito

function ocultarTexto(){
   $("#containerPopUp").fadeOut(2000)
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    $("#containerPopUp").show(ocultarTexto);
    document.getElementById("contador").innerHTML = carrito.length;
   
    sumaProductos()     
}

function sumaProductos() {
  let sumarPrecio = 0;
    for (let i = 0; i < carrito.length; i++) {
      sumarPrecio += carrito[i].precio;
     }
    console.log(sumarPrecio)
    localStorage.setItem("totalCompra", JSON.stringify(sumarPrecio));
    $("#totalCompra ").html(sumarPrecio); 
    
};

//borrar un producto del carrito
function borrarUnProducto() {
    const nuevoCarrito = [];
    for (let i = 0; i < carrito.length; i++) {
      if (i != 0) {
        nuevoCarrito.push(carrito[i]);
      }
    }
      
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    document.getElementById("contador").innerHTML = carrito.length;
   
  }

  
  // Vaciar Carrito de compras
  function vaciarCarrito (){ 
    const nuevoCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    sessionStorage.clear();
    document.getElementById("contador").innerHTML = 0;
    document.getElementById("productosSeleccionados").innerHTML = "";
    $("#containerMensajeVaciarCarrito").show();
  }


// Al terminar la compra se borran los datos del LocalStorage y el numero de productos mostrados en "Carrito de Compras"


function comprar(){
    $("#containerModalFormulario").show();
};

function ocultarFormulario(){
  $("#containerModalFormulario").fadeOut(1000)
 };

 function terminarCompra() {
    const nuevoCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    sessionStorage.clear();

    document.getElementById("contador").innerHTML = 0;
    document.getElementById("productosSeleccionados").innerHTML = "";
     $("#containerMensajeCompra").show();
  };
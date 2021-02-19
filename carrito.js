let carrito = []; 

 // Agregando productos al carrito
//function mostrarTexto(){
  
//}
  function ocultarTexto(){
   $("#containerPopUp").fadeOut(3000)
  }

 function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    //suma de precio total por compra
    let aux = 0;
    for (let i = 0; i < carrito.length; i++) {
      aux += carrito[i].precio;
      
    }
    $("#containerPopUp").fadeIn(3000, ocultarTexto);
    document.getElementById("contador").innerHTML = carrito.length;
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
     
    //document.getElementById("totalCompra").innerHTML = "$ " + aux;
}


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

  $()
  // Vaciar Carrito de compras
  function vaciarCarrito (){ 
    const nuevoCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    sessionStorage.clear();
    document.getElementById("contador").innerHTML = 0;
    document.getElementById("productosSeleccionados").innerHTML = "Su carrito se encuentra sin productos. Por favor dirigase a la pagina de inicio para continuar comprando. Gracias!"
  }


// Al terminar la compra se borran los datos del LocalStorage y el numero de productos mostrados en "Carrito de Compras"

function terminarCompra (){
  const nuevoCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    sessionStorage.clear();
    document.getElementById("contador").innerHTML = 0;
    document.getElementById("productosSeleccionados").innerHTML = "Compra realizada con éxito! Pronto nos pondremos en contacto con Usted para despachar el / los productos. Gracias por su compra!!"
};
let carrito = []; 
let sumaPrecioProductos = localStorage.getItem('totalCompra');

if (localStorage.getItem('totalCompra') == null){
  localStorage.getItem('totalCompra').innerHTML = 0;
}

 // Agregando productos al carrito
function sumaProductos() {
  let sumarPrecio = 0;
    for (let i = 0; i < carrito.length; i++) {
      sumarPrecio += carrito[i].precio;
     }
    console.log(sumarPrecio)
    localStorage.setItem("totalCompra", JSON.stringify(sumarPrecio));   
};
$("#totalCompra").html("Total $" + sumaPrecioProductos); 
$("#totalCompraDos").html("$" + sumaPrecioProductos);  

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



//borrar un producto del carrito
 function iterarCarrito(){
    //Lee local
    localStorage.setItem("carrito", JSON.stringify(carrito));
    //for que pasa el array uno a uno
    for (let i = 0; i < carrito.length; i++){
      document.getElementById("productosSeleccionados").innerHTML = carrito.length;
    }
    //cada objeto lo va mostrando en un acumulador en pantalla.
  }

function borrarUnProducto(i) {
  carrito.splice(i, 1);
  console.log(carrito);  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("contador").innerHTML = carrito.length;
    iterarCarrito()
  }
  
 

  // Vaciar Carrito de compras
  function vaciarCarrito (){ 
    const nuevoCarrito = [];
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
    sessionStorage.clear();
    localStorage.clear();
    document.getElementById("contador").innerHTML = 0;
    document.getElementById("productosSeleccionados").innerHTML = "";
    document.getElementById("totalCompraDos").innerHTML =  0 ;
    $("#containerMensajeVaciarCarrito").show();
  }

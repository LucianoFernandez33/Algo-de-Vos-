let carrito = [];

class producto {
    constructor(nombreProducto, descripProducto, precioProducto, imagenProducto) {
        this.nombre = nombreProducto;
        this.descripcion = descripProducto;
        this.precio = precioProducto;
        this.imagen = imagenProducto;
    }
}

let productoUno = new producto (
    "Combo para cumples",
    "Este combo es lo más lindo que vas a ver hoy: vasos, platos, sorbetes!",
    "$ - CONSULTAR",
    //img.src = 'img/card1.jpg',
)
let productoDos = new producto (
    "Cortinas para cumples",
    "Cortinas en pastel degradé!",
    "$ - CONSULTAR",
    //img.src = 'img/cortinas .jpg',
)

let baseDeDatos = [
    productoUno,
    productoDos,
];

let aux = ``;
    for (let i = 0; i < baseDeDatos.length; i++){
        console.log(baseDeDatos[i]);
        if (baseDeDatos[i].stock > 0){
            aux += `
            <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt="">
          <div class="card-body">
            <h4 class="card-title">"${baseDeDatos[i].nombre}"</h4>
            <p class="card-text">"${baseDeDatos[i].descripcion}"</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>`;
        } else {
            aux += `
            <h2>No tenemos stock</h2>`;
        }
    }
    
    document.getElementById("productos").innerHTML = aux;
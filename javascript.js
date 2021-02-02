let carrito = [];

class producto {
    constructor(nombreProducto, descripProducto, precioProducto, stockProducto, imagenProducto) {
        this.nombre = nombreProducto;
        this.descripcion = descripProducto;
        this.precio = precioProducto;
        this.stock = stockProducto;
        this.imagen = imagenProducto;
    }
}

let productoUno = new producto (
    "Combo para cumples",
    "Este combo es lo más lindo que vas a ver hoy: vasos, platos, sorbetes!",
    "$ - CONSULTAR",
    5,
    //img.src = 'img/card1.jpg',
)
let productoDos = new producto (
    "Cortinas para cumples",
    "Cortinas en pastel degradé!",
    "$ - CONSULTAR",
    3,
    //img.src = 'img/cortinas .jpg',
)
let productoTres = new producto (
    "Banderines",
    "Kit deco fiestas!",
    "$ - CONSULTAR",
    1,
    //img.src = 'img/cortinas .jpg',
)
let productoCuatro = new producto (
    "AMONG US",
    "una temática que furor en este tiempo: cake topper banderines + imágenes para decorar pochocleritas ",
    "$ - CONSULTAR",
    3,
    //img.src = 'img/cortinas .jpg',
)

//let imagen1 = new Image(400, 600);
//imagen1.src = 'img/cortinas.jpg';
//document.body.appendChild(imagen1);

let baseDeDatos = [
    productoUno,
    productoDos,
    productoTres,
    productoCuatro,
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
            <a href="#" class="btn btn-primary">"${baseDeDatos[i].precio}"</a>
          </div>
        </div>
      </div>`;
        } else {
            aux += `
            <h2>No tenemos stock</h2>`;
        }
    }

    document.getElementById("productos").innerHTML = aux;
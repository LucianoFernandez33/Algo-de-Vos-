let carrito = [];
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    document.getElementById("contador").innerHTML = carrito.length;
  }

class Producto {
    constructor(nombreProducto, descripProducto, precioProducto, stockProducto, imagenProducto) {
        this.nombre = nombreProducto;
        this.descripcion = descripProducto;
        this.precio = precioProducto;
        this.stock = stockProducto;
        this.imagen = imagenProducto;
    }
}

let productoUno = new Producto (
    "Combo para cumples",
    "Este combo es lo más lindo que vas a ver hoy: vasos, platos, sorbetes!",
    "$ - CONSULTAR",
    5,
    "img/card1.jpg",
)
let productoDos = new Producto (
    "Cortinas para cumples",
    "Cortinas en pastel degradé!",
    "$ - CONSULTAR",
    3,
    "img/cortinas.jpg",
)
let productoTres = new Producto (
    "Banderines",
    "Kit deco fiestas!",
    "$ - CONSULTAR",
    1,
    "img/fiestas.jpg"
)
let productoCuatro = new Producto (
    "AMONG US",
    "una temática que furor en este tiempo: cake topper banderines + imágenes para decorar pochocleritas ",
    "$ - CONSULTAR",
    3,
    "img/cumple.jpg",
)

let productoCinco = new Producto (
    "Velas SPARKLERS",
    "Súper lindas y delicadas para decorar tus tortas",
    "$ - CONSULTAR",
    10,
    "img/velas.jpg"
)
let productoSeis = new Producto (
    "Fotolibro",
    "Regalo expecial para el Día de la Madre, Fotolibro de 15x20cm con 20 fotos, frases y espacio para escribirle + tarjeta con 2 chocolates marroc",
    "$ - CONSULTAR",
    5,
    "img/fotolibro.jpeg",
)

let productoSiete = new Producto (
    "Pizarras Imantadas",
    "Kit de pizarras imantadas con fibras para dibujar",
    "$ - CONSULTAR",
    3,
    "img/pizarras.jpeg",
)

let productoOcho = new Producto (
    "TikTok",
    "Las cartas contienen diferentes retos, challenge y desafíos de TikTok",
    "$ - CONSULTAR",
    2,
    "img/tiktok.jpeg",
)
let productoNueve = new Producto (
    "Kit de Cumple",
    " Kit de cumple con motivos de La Granja de Zenon",
    "$ - CONULTAR",
    1,
    "img/combo-cumple.jpeg",
)
let productoDiez = new Producto (
    "Caketoppers",
    "Kit de decoración Animalitos del Bosque",
    "$ - CONSULTAR",
    1,
    "img/animales.jpeg",
)

let productoOnce = new Producto (
    "Imánes",
    "Abecedario, vocales, números y signo imántados",
    "$ - CONSULTAR",
    2,
    "img/letras.jpeg",
)
let productoDoce = new Producto (
    "Etiquetas Personalizadas",
    " Logo más etiquetas",
    "$ - CONULTAR",
    4,
    "img/tarjetas.jpeg",
)

let baseDeDatos = [
    productoUno,
    productoDos,
    productoTres,
    productoCuatro,
    productoCinco,
    productoSeis,
    productoSiete,
    productoOcho,
    productoNueve,
    productoDiez,
    productoOnce,
    productoDoce,  
];
// mostrar cards de productos en pagina de inicio index.html
let aux = ``;
    for (let i = 0; i < baseDeDatos.length; i++){
        console.log(baseDeDatos[i]);
        if (baseDeDatos[i].stock > 0){
            aux += `
            <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top"" src="${baseDeDatos[i].imagen}" alt="">
          <div class="card-body">
            <h4 class="card-title">"${baseDeDatos[i].nombre}"</h4>
            <p class="card-text">"${baseDeDatos[i].descripcion}"</p>
            <p class="card-text">"${baseDeDatos[i].precio}"</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(
                baseDeDatos[i]
              )})'>Agregar Al Carrito</button>
          </div>
        </div>
      </div>`;
        } else {
            aux += `
            <h2>No tenemos stock</h2>`;
        }
    }

    //document.getElementById("productos").innerHTML = aux;
    $("#productos").html(aux);

                                // Funcionamiento del carrito
    // Agregando productos al carrito

    function agregarAlCarrito(producto) {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      
        let aux = 0;
        for (let i = 0; i < carrito.length; i++) {
          aux += carrito[i].precio;
        }
        document.getElementById("contador").innerHTML = carrito.length;
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
       // $("contador").html(carrito.length)
      }

      // Vaciar Carrito de compras

    
      
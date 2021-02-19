
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
    900,
    5,
    "img/card1.jpg",
)
let productoDos = new Producto (
    "Cortinas para cumples",
    "Cortinas en pastel degradé!",
    300,
    3,
    "img/cortinas.jpg",
)
let productoTres = new Producto (
    "Banderines",
    "Kit deco fiestas!",
    850,
    1,
    "img/banderines.jpg"
)
let productoCuatro = new Producto (
    "AMONG US",
    "una temática que furor en este tiempo: cake topper banderines + imágenes para decorar pochocleritas ",
    1100,
    3,
    "img/cumple.jpg",
)

let productoCinco = new Producto (
    "Velas SPARKLERS",
    "Súper lindas y delicadas para decorar tus tortas",
    150,
    10,
    "img/velas.jpg"
)
let productoSeis = new Producto (
    "Fotolibro",
    "Regalo expecial para el Día de la Madre, Fotolibro de 15x20cm con 20 fotos, frases y espacio para escribirle + tarjeta con 2 chocolates marroc",
    1500,
    5,
    "img/fotolibro.jpeg",
)

let productoSiete = new Producto (
    "Pizarras Imantadas",
    "Kit de pizarras imantadas con fibras para dibujar",
    1300,
    3,
    "img/pizarras.jpeg",
)

let productoOcho = new Producto (
    "TikTok",
    "Las cartas contienen diferentes retos, challenge y desafíos de TikTok",
    500,
    2,
    "img/tiktok.jpeg",
)
let productoNueve = new Producto (
    "Kit de Cumple",
    " Kit de cumple con motivos de La Granja de Zenon",
    1600,
    1,
    "img/combo-cumple.jpeg",
)
let productoDiez = new Producto (
    "Caketoppers",
    "Kit de decoración Animalitos del Bosque",
    1350,
    1,
    "img/animales.jpeg",
)

let productoOnce = new Producto (
    "Imánes",
    "Abecedario, vocales, números y signo imántados",
    450,
    2,
    "img/letras.jpeg",
)
let productoDoce = new Producto (
    "Etiquetas Personalizadas",
    "Logo más etiquetas de tu negocio, profesión, etc",
    550,
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
                    <img class="card-img-top"" src="${baseDeDatos[i].imagen}" alt="imagen de productos en venta">
                    <div class="card-body" id="estiloCard">
                        <h4 class="card-title">"${baseDeDatos[i].nombre}"</h4>
                        <p class="card-text">"${baseDeDatos[i].descripcion}"</p>
                        <p class="card-text">"$ ${baseDeDatos[i].precio}"</p>
                     </div>
                    <div class="card-footer">
                         
                        <button class="btn btn-primary" id="show" onclick='agregarAlCarrito(${JSON.stringify(
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

    $("#productos").html(aux); // utilizando JQUERY


    // mostrar cards con productos agregados al carrito en pagina carrito.html
    let card = ``;
    for (let i = 0; i < carrito.length; i++){
        console.log(carrito[i]);
        if (carrito[i].stock >= 0){
            card += `
            <div class="row g-0">
                <div class="col-lg-3 col-md-6 mb-4">
                    <img src="${carrito[i].imagen}" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">"${carrito[i].nombre}"</h5>
                        <p class="card-text">"${carrito[i].descripcion}"</p>
                        <p class="card-text"><small class="text-muted">"${carrito[i].precio}"</small></p>
                        <button class="btn btn-primary" onclick='borrarUnProducto()'>Cancelar Producto</button>
                    </div>
                </div> 
            </div>
    <br><br>`;
        } else {
            card += `
            <h2>No tienes productos seleccionados.</h2>`;
        }
    }

    $("#productosSeleccionados").html(card); //utilizando JQUERY

    // mostrar productos de compra en un nuevo nav
   // let cardDos = ``;
   // for (let i = 0; i < carrito.length; i++){
   //     console.log(carrito[i]);
   //     if (carrito[i].stock >= 0){
   //         cardDos += `
   //         <ul class="nav">
   //         <li class="nav-item">
   //           
   //                 <img src="${carrito[i].imagen}" class="card-img-top" alt="...">
   //                 <div class="card-body">
   //                     <h5 class="card-title">"${carrito[i].nombre}"</h5>
   //                     <a href="#" class="btn btn-primary">Go somewhere</a>
   //                 </div>
   //             
   //         </li>
   //      </ul>`
   //             ;
   //     } else {
   //         cardDos += `
   //         <h2>No tienes productos seleccionados.</h2>`;
   //     }
   // }

   // $("#hover").html(cardDos); //utilizando JQUERY
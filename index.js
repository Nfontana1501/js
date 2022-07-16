const pasesSki = [
    {id: 1, nombre: "Pase ski un día", valor : 1000},
    {id: 2, nombre: "Pase ski dos días", valor : 1900},
    {id: 3, nombre: "Pase ski cuatro días", valor : 3700},
    {id: 4, nombre: "Pase ski siete días", valor : 6000}
]

const pasesPeaton = [
    {id: 5, nombre: "Pase peatón un día", valor : 200},
    {id: 6, nombre: "Pase peatón dos días", valor : 380},
    {id: 7, nombre: "Pase peatón cuatro días", valor : 750},
    {id: 8, nombre: "Pase peatón siete días", valor : 1300}
]

const equipos = [
    {id: 9, nombre: "Equipo de ski", valor : 2000},
    {id: 10, nombre: "Equipo de snowboard", valor : 2500},
    {id: 11, nombre: "Equipo de protección personal", valor : 1000},
    {id: 12, nombre: "Ropa de nieve", valor : 1750}
]

const pases = pasesSki.concat(pasesPeaton);
const productosTotales = pases.concat(equipos);

class Carrito {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }

    calcularTotal() {
        let total = 0;
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].valor;
        }
        return total;
    }

}

let formulario;
let inputNombre;
let inputApellido;
let inputServicio;
let cards;
let tablaCarrito;
let tablaBody;
let botones;
let eliminar;
let finalizar;

function inicializarElementos(){
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("inputNombre");
    inputApellido = document.getElementById("inputApellido");
    inputServicio = document.getElementById("inputServicio");
    cards = document.getElementById("cards");
    tablaCarrito = document.getElementById("tablaCarrito");
    tablaBody = document.getElementById("tBody")
    botones = document.getElementsByClassName("compra");
    eliminar = document.getElementById("eliminar")
    finalizar = document.getElementById("finalizar")
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
    }

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let servicio = inputServicio.value;

    if ((servicio === "Pases Ski") && (nombre !== "") && (apellido !== "")){
        cards.innerHTML = "";
        pasesSki.forEach(producto => {
        cards.innerHTML += renderCard(producto);
        })
    }
    else if ((servicio === "Pases Peaton") && (nombre !== "") && (apellido !== "")){
        cards.innerHTML = "";
        pasesPeaton.forEach(producto => {
        cards.innerHTML += renderCard(producto);
        })
    }
    else if ((servicio === "Rental") && (nombre !== "") && (apellido !== "")){
        cards.innerHTML = "";
        equipos.forEach(producto => {
        cards.innerHTML += renderCard(producto);
        })
    }

    formulario.reset();

    let st = actualizarCarrito();
    agregarCarrito(st);
    
    eliminar.onclick = () => {eliminarCarrito()};
    
}

function renderCard(servicio) {
    let cardRendered = `    
    <div class="card col-lg-5 col-md-5 m-3" style="width: 18rem;">
        <div class="card-body col-lg-12">
            <h5 class="card-title">${servicio.id}. ${servicio.nombre}</h5>
            <p class="card-text">$ ${servicio.valor}</p>
            <a href="#" class="btn btn-primary compra" id="${servicio.id}">Agregar al carrito</a>
        </div>
    </div>
    `;
    return cardRendered;
}

function agregarCarrito (st) {
    let carrito = new Carrito(1);
    if(st !== null){
        for (const item of st.productos) {
            carrito.productos.push(item);
            limpiarCarrito();
            renderizarCarrito(carrito);
            renovarStorage(carrito);
        }
    }

    let arrayDeBotones = Array.from(botones);
    arrayDeBotones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            let productoSeleccionado = productosTotales.find(producto => producto.id == e.target.id);
            carrito.productos.push(productoSeleccionado);
            limpiarCarrito();
            renderizarCarrito(carrito);
            renovarStorage(carrito);
        })
    })
}

function actualizarCarrito (){
    let storage = JSON.parse(localStorage.getItem("carrito"));
    localStorage.removeItem("carrito"); 
    return storage
}

function renovarStorage(carrito) {
    localStorage.removeItem("carrito"); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function limpiarCarrito() {
    tablaCarrito.innerHTML = "";
}

function eliminarCarrito() {
    tablaCarrito.innerHTML = "";
    localStorage.clear();
}

function renderizarCarrito(carrito) {
    carrito.productos.forEach(producto => {
        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML = `
            <td class="text-center">${producto.id}</td>
            <td class="text-center">${producto.nombre}</td>
            <td class="text-center">${producto.valor}</td>`;
            tablaCarrito.appendChild(filaTabla);
    })

    let filaTotal = document.createElement("tr")
    filaTotal.innerHTML = `
        <td class="text-center"><b>Subtotal</b></td>
        <td class=""></td>
        <td class="text-center"><b>${carrito.calcularTotal()}</b></td>`
    tablaCarrito.appendChild(filaTotal);
}

function main (){
    inicializarElementos();
    inicializarEventos();
}

main();
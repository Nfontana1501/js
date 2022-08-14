const pasesSki = []
const pasesPeaton = []
const equipos = []
const productosTotales = []

console.log(equipos)
console.log(pasesPeaton)
console.log(pasesSki)
console.log(productosTotales)

class Equipo {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }
}

class Ski {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }
}

class Peaton {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }
}

async function obtenerArrayRental() {
    const res = await fetch("rental.json");
    const data = await res.json();
    data.forEach(item => {
        let equipo = new Equipo (item.id, item.nombre, item.valor);
        equipos.push(equipo)
        productosTotales.push(equipo);
        })
}

async function obtenerArrayski() {
    const res = await fetch("ski.json");
    const data = await res.json();
    data.forEach(item => {
        let equipo = new Ski (item.id, item.nombre, item.valor);
        pasesSki.push(equipo)
        productosTotales.push(equipo);
        })
}

async function obtenerArrayPeaton() {
    const res = await fetch("peaton.json");
    const data = await res.json();
    data.forEach(item => {
        let equipo = new Peaton (item.id, item.nombre, item.valor);
        pasesPeaton.push(equipo)
        productosTotales.push(equipo);
        })
}

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
let totalCompra;
let precioFinalCompra;


function inicializarElementos(){
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("inputNombre");
    inputApellido = document.getElementById("inputApellido");
    inputServicio = document.getElementById("inputServicio");
    cards = document.getElementById("cards");
    tablaCarrito = document.getElementById("tablaCarrito");
    tablaBody = document.getElementById("tBody");
    botones = document.getElementsByClassName("compra");
    eliminar = document.getElementById("eliminar");
    finalizar = document.getElementById("finalizar");
    totalCompra = document.getElementById("totalCompra");
    precioFinalCompra = document.getElementById("precioFinalCompra");
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
    else{
        Swal.fire({
            icon: 'error',
            title: 'Algo ha salido mal',
            text: 'Por favor complete los datos requeridos en el formulario',
        })
    }

    formulario.reset();
    let st = actualizarCarrito();
    agregarCarrito(st);
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

    eliminar.onclick = () => {eliminarCarrito()};
    finalizar.onclick = () => {finalizarCompra(carrito), formaPago(carrito)};
}

function actualizarCarrito (){
    let storage = JSON.parse(localStorage.getItem("carrito"));
    localStorage.removeItem("carrito"); 
    return storage;
}

function renovarStorage(carrito) {
    localStorage.removeItem("carrito"); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function limpiarCarrito() {
    tablaCarrito.innerHTML = ""
}

function eliminarCarrito() {
    tablaCarrito.innerHTML = "";
    localStorage.clear();
    let st = actualizarCarrito();
    agregarCarrito(st);
}

function finalizarCompra(carrito){
    let finalDeCompra = document.createElement("h3");
    totalCompra.innerHTML = "";
    finalDeCompra.innerHTML = `
        El valor parcial de su carrito es de: <b>${carrito.calcularTotal()}</b>. Para proceder con el pago, por favor seleccione el medio de pago que desea utilizar.
    `;
    totalCompra.appendChild(finalDeCompra);

    let divtotal = document.createElement("div");
    divtotal.innerHTML = `
        <button type="submit" id="efectivo" class="btn btn-primary mt-5 mb-5 align-self-center" id="">Efectivo - 10% de descuento</button>
        <button type="submit" id="debito" class="btn btn-primary mt-5 mb-5 align-self-center" id="">Tarjeta de débito - No aplica descuento</button>
        <button type="submit" id="credito" class="btn btn-primary mt-5 mb-5 align-self-center" id="">Tarjeta de crédito - 5% de recargo</button>`;
    totalCompra.appendChild(divtotal);
}

function formaPago (carrito) {

    let efectivo = document.getElementById("efectivo");
    let debito = document.getElementById("debito");
    let credito = document.getElementById("credito");


    efectivo.onclick = () => {
        Swal.fire({
            icon: 'success',
            title: `El valor total de su compra es de: <b>${carrito.calcularTotal()*0.9}</b>`,
            text: 'Su compra ha sido exitosa!',
        })
    };

    debito.onclick = () => {
        Swal.fire({
            icon: 'success',
            title: `El valor total de su compra es de: <b>${carrito.calcularTotal()*1.0}</b>`,
            text: 'Su compra ha sido exitosa!',
        })
    };

    credito.onclick = () => {
        Swal.fire({
            icon: 'success',
            title: `El valor total de su compra es de: <b>${carrito.calcularTotal()*1.05}</b>`,
            text: 'Su compra ha sido exitosa!',
        })
    };

    eliminarCarrito();
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

    let filaTotal = document.createElement("tr");
    filaTotal.innerHTML = `
        <td class="text-center"><b>Subtotal</b></td>
        <td class=""></td>
        <td class="text-center"><b>${carrito.calcularTotal()}</b></td>`;
    tablaCarrito.appendChild(filaTotal);
}

async function main (){
    inicializarElementos();
    inicializarEventos();
    await obtenerArrayRental();
    await obtenerArrayPeaton();
    await obtenerArrayski();
}

main(); 
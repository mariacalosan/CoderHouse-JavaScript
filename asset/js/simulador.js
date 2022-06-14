//funciones     
function functionAgregar(numero) {
    for (let i = 0; i < articulos.length; i++) {
        (numero === `A${articulos[i].id}`) && carro.agregar(articulos[i]);
    }
}

function total() {
    let total = 0;
    for (const produ of carro.lista) {
        total += produ.precio;
    }
    let nuevot = getID('total');
    nuevot.innerText = total + "$";
    let nuevoc = getID('conteo')
    let contado = 0;
    nuevoc.innerText = carro.lista.length;
}

function mostrarCarrito() {
    almacen.innerHTML = null;
    for (let i = 0; i < carro.lista.length; i++) {
        almacen.innerHTML += `<div><img src=${carro.lista[i].img}><p>${carro.lista[i].nombre}</p><span>${carro.lista[i].precio + "$"}
        <i class="fa-solid fa-trash-arrow-up deleteA " id="deleteA-${i}"></i></span></div>\n`;
    }
    total();
}

// variables
let carro = new Carrito();
let almacen = getID('articulos');

// eventos
almacen.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === "I") {
        let numero = e.target.id;
        for (let i = 0; i < carro.lista.length; i++) {
            (numero === `deleteA-${i}`) && carro.eliminar(i);
        }
    }
})




/*Incluir fundamentalmente en la segunda pre-entrega:

Eventos
DOM
Funciones
Arreglos
Objetos
Storage (sessionStorage y/o localStorage)*/

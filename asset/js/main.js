let productos = [];

fetch("./api.json")
  .then((res) => res.json())
  .then((data) => {
    cargarProductos(api);
  });

const cargarProductos = (data) => {
  productos = data;
  const contenedor = document.getElementById("products-container");
  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("product__card");
    card.innerHTML = ` <div class="card">
        <h5 class="card-title">${producto.titulo}</h5>
        <img src=${producto.imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">
            ${producto.descripcion}
          </p>
          <h5 class="card__price">Precio: <span>${producto.precio}</span></h5>
          <a href="#" class="btn" onClick="agregarAlCarrito(${indice})">Añadir al Carrito</a>
        </div>
      </div>`;
    contenedor.appendChild(card);
  });
};

let cart = [];

const agregarAlCarrito = (indiceDelArrayProducto) => {
  const indiceEncontrado = cart.findIndex((elemento) => {
    return elemento.id === productos[indiceDelArrayProducto].id;
  });
  if (indiceEncontrado === -1) {
    let productoAgregar = productos[indiceDelArrayProducto];
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    dibujarCarrito();
  } else {
    cart[indiceEncontrado].cantidad += 1;
    actualizarStorage(cart);
    dibujarCarrito();
  }
};
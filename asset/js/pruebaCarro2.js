//variable inicializadora
let productos = [];
fetch("./api.json")
  .then((res) => res.json())
  .then((data) => {
    cargarProductos(api);
  });
const implementarProductos = (capturar) => {
  productos = capturar;
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
let carritoContainer = document.getElementById("cart-container");
let total = 0;

const dibujarCarrito = () => {
  carritoContainer.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((producto, indice) => {
      total = total + producto.precio * producto.cantidad;
      let carrito = document.createElement("div");
      carrito.className = "producto-carrito";
      carrito.innerHTML = `
        <img class="car-img" src="${producto.imagen}"/>
        <div class="product-details">
          ${producto.titulo}
        </div>
        <div class="product-details" > Cantidad: ${producto.cantidad}</div>
        <div class="product-details"> Precio: $ ${producto.precio}</div>
        <div class="product-details"> Subtotal: $ ${
          producto.cantidad * producto.precio
        }</div>
        <button class="btn btn-info"  id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
         `;
      carritoContainer.appendChild(carrito);
    });
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-carrito";
    totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
  <button class= "btn btn-info finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
    carritoContainer.appendChild(totalContainer);
  }
};

const removeProduct = (indice) => {
  cart.splice(indice, 1);
  actualizarStorage(cart);
  dibujarCarrito();
};

const actualizarStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  dibujarCarrito();
}




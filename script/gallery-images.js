import { datos } from "./services.js";
const galeria = document.querySelector(".product-gallery");

const crearCards = (categoria) => {
  const productos = categoria.productos
  const cardContainer = document.createElement("div");
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` 
    <img src="${producto.url}" class="img-div">
    <div class="delete-icon"></div>
    <div class="edit-icon"></div>
    <p class="product-name">${producto.nombre}</p>
    <p class="product-value">${producto.precio}</p>
    <a href="" class="link">Ver producto</a>`
    cardContainer.appendChild(card)
  });
  cardContainer.classList.add("card-container")
  return cardContainer
}

const crearSeccion = async () => {
  const nombre = await datos.datosCategorias()
  for (const categoria of nombre) {
    const card =  crearCards(categoria)
    const div = document.createElement("div")
    div.classList.add("product-gallery-div")
    const html = `
          <div class="gallery-title-div">
            <h3 class="gallery-title">${categoria.nombre}</h3>
            <a href="" class="link">Ver todo</a>
          </div>`
    div.innerHTML = html
    div.appendChild(card)
    galeria.appendChild(div)
  };

}

crearSeccion()
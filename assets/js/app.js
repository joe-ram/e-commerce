//Modal
const modalContainer = document.getElementById('modal_container');
const openCart = document.getElementById('open');
const closeCart = document.getElementById('close');
const modalCart = document.getElementById('modalCart');

openCart.addEventListener('click', () => {
   modalContainer.classList.toggle('modal-active');
});

closeCart.addEventListener('click', () => {
   modalContainer.classList.remove('modal-active');
});

modalContainer.addEventListener('click', () => {
   closeCart.click()
})
modalCart.addEventListener('click', (e) => {
   e.stopPropagation();
})

// Inventario de productos
class Productos{
   constructor(id, name, price, img, quantity) {
      this.id = id,
      this.name = name,
      this.price = price,
      this.img = img,
      this.quantity = quantity
   }
}

const products = []
const prod1 = new Productos ("1", 'Campera azul', 2000, '../assets/img/ropa-1.jpg', 1);
const prod2 = new Productos ("2", 'Buzo', 2000, '../assets/img/ropa-2.jpg', 1);
const prod3 = new Productos ("3", 'Pantalon', 2000, '../assets/img/ropa-3.jpg', 1);
const prod4 = new Productos ("4", 'Pantalon II', 2000, '../assets/img/ropa-4.jpg', 1);
const prod5 = new Productos ("5", 'Jean', 2000, '../assets/img/ropa-5.jpg', 1);
const prod6 = new Productos ("6", 'Camisa', 2000, '../assets/img/ropa-6.jpg', 1);
const prod7 = new Productos ("7", 'Buzo capucha', 2000, '../assets/img/ropa-7.jpg', 1);
const prod8 = new Productos ("8", 'Remera blanca', 2000, '../assets/img/ropa-8.jpg', 1);
const prod9 = new Productos ("9", 'Remera azul', 2000, '../assets/img/ropa-9.jpg', 1);
const prod10 = new Productos ("10", 'Bermuda', 2000, '../assets/img/ropa-10.jpg', 1);

products.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10)
console.log(products)

//Función para traer los productos

const mostrarProductos = (products) => {
   const productsContainer = document.getElementById('product-container');
   products.forEach(product => {
      const card = document.createElement('card');
      card.innerHTML += `<div class="card" style="width:18rem";>
                           <img src="${product.img}" class="card-img-top">
                           <div class="card-body">
                              <h5 class="card-title">${product.name}</h5>
                              <p class="card-text">Price:$ ${product.price}</p>
                              <p class="card-text" id="quantity">${product.quantity}</p>
                              <button class="btn btn-primary" id="button${product.id}">Add to cart</button>
                           </div>      
                        </div>`
      productsContainer.appendChild(card);
      const button = document.getElementById(`button${product.id}`);
      button.addEventListener('click', () => {
         cart(product.id);
         alert(`Agregaste ${product.name}`)
      })      
   });
}

mostrarProductos(products)
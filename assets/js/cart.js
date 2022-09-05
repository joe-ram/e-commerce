//Función para mostrar productos en carrito

const shoppingCart = [];
const cart = (productId) =>{
   const cartContainer = document.getElementById('cart-container');
   const mostrarEnCarrito = () =>{
      let product = products.find(product => product.id == productId);
      shoppingCart.push(product);
      localStorage.setItem("products", JSON.stringify(shoppingCart));
      let div = document.createElement('div');
      div.classList.add('productInCart');
      div.innerHTML = `<p>${product.name}</p>
                       <p>Price:$ ${product.price}</p>
                       <p id="quantity${product.quantity}">Cantidad: ${product.quantity}</p>
                       <button class="btn btn-danger btn-sm" id="delete${product.id}">x</button>
                       `
      cartContainer.appendChild(div)
      let buttonDelete = document.getElementById(`delete${product.id}`);
      buttonDelete.addEventListener('click', (e) => {
         deleteProduct(e);
      })

   }
   mostrarEnCarrito()
}

function deleteProduct(e) {
   let btnClicked = e.target;
   btnClicked.parentElement.remove()
   
}
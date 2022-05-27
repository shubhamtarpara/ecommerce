let carts = document.querySelectorAll('.btn-text');

// window.onunload = () => {
//   // Clear the local storage
//   window.localStorage.clear();
// }
let products = [{
  name: 'Learn Python',
  tag: 'learnpython',
  price: 50,
  inCart: 0
},
{
  name: 'Learn Python',
  tag: 'learnpython',
  price: 50,
  inCart: 0
},
{
  name: 'Learn Python',
  tag: 'learnpython',
  price: 50,
  inCart: 0
},
{
  name: 'Learn Python',
  tag: 'learnpython',
  price: 50,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
{
  name: 'Parlor Palm',
  tag: 'parlorpalm',
  price: 60,
  inCart: 0
},
];


for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector('.cart span').textContent = productNumbers - 1;
    console.log("running");
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
    console.log("running"); 
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  // let productNumbers = localStorage.getItem('cartNumbers');
  // productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.tag;

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product
      }
    }
    cartItems[currentProduct].inCart += 1;

  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - product.price);
  } else if (cart != null) {

    cart = parseInt(cart);
    localStorage.setItem("totalCost", cart + product.price);

  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector('.products');
  let mainCost = document.querySelector('.mainCost')

  if (cartItems && productContainer && mainCost) {
    productContainer.innerHTML = '';
    mainCost.innerHTML = '';
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML +=
        `<div class="product"><i class="fa-solid fa-circle-xmark close"></i></i><img src="./images/${item.tag}.png"/>
              <span class="sm-hide">${item.name}</span>
          </div>
          <div class="price sm-hide">$${item.price},00</div>
          <div class="quantity">
          <i class="fa-solid fa-circle-left decrease"></i></ion-icon>

                  <span>${item.inCart}</span>
                  <i class="fa-solid fa-circle-right increase"></i></i> 
          </div>
          <div class="total">$${item.inCart * item.price},00</div>`;
    });

    mainCost.innerHTML += `
          <div class="basketTotalContainer">
          <div class="title-total">
              <h4 class="basketTotalTitle ">Total</h4>
              <h4 class="basketTotal sub">Sub Total</h4>
              </div>
              <div class = "empty"> </div>
          <div class = "total-total">    
              <h4 class="basketTotalTitle">$${cart},00</h4> 
              <h4 class="basketTotal sub">$${cart},00</h4>
          </div>
          </div>
          <div class ="check-out">Checkout
          </div>`

    deleteButtons();
    manageQuantity();
  }
}
function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');
  let currentQuantity = 0;
  let currentProduct = '';
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
      console.log(cartItems);
      currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
      console.log(currentProduct);

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener('click', () => {
      console.log(cartItems);
      currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
      console.log(currentQuantity);
      currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g, '').trim();
      console.log(currentProduct);

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');
  let currentQuantity = 0;
  let currentProduct = '';
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
      console.log(cartItems);
      currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
      console.log(currentProduct);

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener('click', () => {
      console.log(cartItems);
      currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
      console.log(currentQuantity);
      currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
      console.log(currentProduct);

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".close");
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productName;
  // console.log(cartItems);

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g, '').trim();

      localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
      localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));
      

      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    })
  }
}

onLoadCartNumbers();
displayCart();

// localStorage.clear();





// let notification = document.querySelector('h1');
// let button = document.getElementsByClassName('btn-text');
// for(but of button){
//   but.addEventListener('click', (e)=>{
//     let add = Number(notification.getAttribute('data-count') || 0);
//     notification.setAttribute('data-count', add +1);
//     console.log(add)
//     notification.classList.add('zero')

//   })
// }

// function scrollValue() {
//   var navbar = document.getElementsByClassName('main-container');
//   var scroll = window.scrollY;
//   if (scroll < 100) {
//     navbar.classList.add('BgColour');
//   } else {
//       navbar.classList.add('BgColour');
//   }
// }

// window.addEventListener('scroll', scrollValue);


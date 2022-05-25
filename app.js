let carts = document.querySelectorAll('.btn-text');

// window.onunload = () => {
//   // Clear the local storage
//   window.localStorage.clear();
// }
let products = [
  {
    name: 'Learn Python',
    tag: 'Learn Python',
    price: 54.99,
    inCart: 0
  },
  {
    name: 'Learn Python',
    tag: 'Learn Python',
    price: 54.99,
    inCart: 0
  },
  {
    name: 'Learn Python',
    tag: 'Learn Python',
    price: 54.99,
    inCart: 0
  },
  {
    name: 'Learn Python',
    tag: 'Learn Python',
    price: 54.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
  {
    name: 'Parlor Palm',
    tag: 'Parlor Palm',
    price: 74.99,
    inCart: 0
  },
];


for(let i=0; i< carts.length; i++) {
  carts[i].addEventListener('click', () => {
      cartNumbers(products[i]);
      
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if( productNumbers ) {
      document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if( action ) {
      localStorage.setItem("cartNumbers", productNumbers - 1);
      document.querySelector('.cart span').textContent = productNumbers - 1;
      console.log("action running");
  } else if( productNumbers ) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
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
console.log(cartItems)
  if(cartItems != null) {
      let currentProduct = product.tag;
  
      if( cartItems[currentProduct] == undefined ) {
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

onLoadCartNumbers();
// localStorage.clear();



// let noti = document.querySelector('h1');
// let button = document.getElementsByClassName('btn-text');
// for(but of button){
//   but.addEventListener('click', (e)=>{
//     let add = Number(noti.getAttribute('data-count') || 0);
//     noti.setAttribute('data-count', add +1);
//     console.log(add)
//     noti.classList.add('zero')

//   })
// }

const fadeInUp = document.querySelector('.shop-title')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeInUp.classList.add('fadeInUp');
      return;
    }
  });
});
observer.observe(document.querySelector('.shop-title'));

const fadeIn = document.querySelector('.shop-product')

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeIn.classList.add('fadeInUp');
      return;
    }
  });
});
observer1.observe(document.querySelector('.shop-product'));

const fade = document.querySelector('.box-container')

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fade.classList.add('fadeInUp');
      return;
    }
  });
});
observer2.observe(document.querySelector('.box-container'));

const fade1 = document.querySelector('.brand-icon')

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fade1.classList.add('fadeInUp');
      return;
    }
  });
});
observer5.observe(document.querySelector('.brand-icon'));

const fadeLeft = document.querySelector('.first-collection')

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeLeft.classList.add('fadeInLeft');
      return;
    }
  });
});
observer3.observe(document.querySelector('.first-collection'));

const fadeRight = document.querySelector('.second-collection')

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeRight.classList.add('fadeInRight');
      return;
    }
  });
});
observer4.observe(document.querySelector('.second-collection'));

const fadeLeftText = document.querySelector('.bottom-text')

const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeLeftText.classList.add('fadeInLeft');
      return;
    }
  });
});
observer6.observe(document.querySelector('.bottom-text'));

const fadeRightImg = document.querySelector('.bottom-img')

const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeRightImg.classList.add('fadeInRight');
      return;
    }
  });
});
observer7.observe(document.querySelector('.bottom-img'));

const fadeDown = document.querySelector('.end-img-container')

const observer8 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeDown.classList.add('fadeInUp');
      return;
    }
  });
});
observer8.observe(document.querySelector('.end-img-container'));



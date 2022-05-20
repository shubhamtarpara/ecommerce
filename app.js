const fadeInUp = document.querySelector('.shop-title')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeInUp.classList.add('fadeInUp');
      return;
    }
  });
});

observer.observe(document.querySelector('.shop-container'));




const fadeIn = document.querySelector('.shop-product')

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeIn.classList.add('fadeInUp');
      return;
    }
  });
});

observer1.observe(document.querySelector('.shop-container'));





const fade = document.querySelector('.box-container')

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fade.classList.add('fadeInUp');
      return;
    }
  });
});

observer2.observe(document.querySelector('.overlay-container'));




const fadeLeft = document.querySelector('.first-collection')

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeLeft.classList.add('fadeInLeft');
      return;
    }
  });
});

observer3.observe(document.querySelector('.main-collection'));



const fadeRight = document.querySelector('.second-collection')

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      fadeRight.classList.add('fadeInRight');
      return;
    }
  });
});

observer4.observe(document.querySelector('.main-collection'));
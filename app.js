
let noti = document.querySelector('h1');
let button = document.getElementsByClassName('btn-text');
for(but of button){
  but.addEventListener('click', (e)=>{
    let add = Number(noti.getAttribute('data-count') || 0);
    noti.setAttribute('data-count', add +1);
    console.log(add)
    noti.classList.add('zero')

  })
}









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



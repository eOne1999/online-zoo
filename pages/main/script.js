'use strict';

//Pets
let items = document.querySelectorAll('.pets');
let currentItem = 0;
let isEnabled = true;

function randomizePets() {
    const petImages = document.querySelectorAll('.pet_img');
    for (let i = petImages.length - 1; i > -1; i--) {
        let randomNum = Math.floor(Math.random() * petImages.length + 1);
        petImages[i].style.order = randomNum;
    }
}

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

randomizePets();

document.querySelector('.round-arrow.round-arrow-left').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
})

document.querySelector('.round-arrow.round-arrow-right').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
})

//Testimonials
let scrollbarRange = document.querySelector('.scrollbar');

let rangeValue = function() {
  let newValue = scrollbarRange.value;
  let screen = document.documentElement.clientWidth;
  let transformLeft = 0;
  if (screen > 1599) {
    transformLeft = -25.65;
  } else {
    transformLeft = -34.397;
  }
  let prop = 'translate3d(' + (transformLeft * newValue) + '%, 0px, 0px)';
  let target = document.querySelector('.testimonials');
  target.style.transform = prop;
}

scrollbarRange.addEventListener("input", rangeValue);

//Testimonials popup
let screenWidth = document.documentElement.clientWidth;
let testimonials = document.querySelectorAll('.testimonial-bg');
let fadeBg = document.querySelector('.shadow-bg-testimonials');


testimonials.forEach(element => {
    element.addEventListener('click', (event) => {
        let screenWidth = document.documentElement.clientWidth;
        if (screenWidth < 1000) {
            event.preventDefault();
            fadeBg.classList.toggle('shadow-bg-active');
            element.classList.toggle('testimonial-bg-active');
        }
    })
});

fadeBg.addEventListener('click', () => {
    fadeBg.classList.toggle('shadow-bg-active');
    testimonials.forEach(element => {
        element.classList.remove('testimonial-bg-active');
    })
});

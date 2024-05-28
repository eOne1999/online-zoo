'use strict';
const nav = document.querySelector('.nav');
const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');
const shadow = document.querySelector('.shadow-bg');
const button = document.querySelector('.burger-button');

burgerMenu.addEventListener('click', (event) => {
    event.preventDefault();
    navigation.classList.toggle('open-menu');
    shadow.classList.toggle('shadow-bg-active');
    nav.classList.toggle('nav-active');
    button.classList.toggle('burger-button-active');
});

shadow.addEventListener('click', () => {
    navigation.classList.toggle('open-menu');
    shadow.classList.toggle('shadow-bg-active');
    nav.classList.toggle('nav-active');
    button.classList.toggle('burger-button-active');
});
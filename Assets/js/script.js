const Burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav-links');
const navs = document.querySelectorAll('.nav-links li');
const menuLink = document.querySelector('.menu-link');
const body = document.querySelector("body");
const navbar = document.querySelector('.nav');

AOS.init();

Burger.addEventListener('click', () => {
    navigation.classList.toggle('nav-open'); 
    Burger.classList.toggle('toggle');
    body.classList.add("disabled");

    navs.forEach((nav, index) => {
        if(nav.style.animation){
            nav.style.animation = ``; 
        }
        else{
            nav.style.animation = `nav-linksFade 1.5s ease Forwards ${index/ 4 + 0.1}s`;
        }
    });
   
});
 
menuLink.addEventListener('click', () => {
    navigation.classList.toggle('nav-open');
    Burger.classList.toggle('toggle');
    body.classList.remove("disabled");
})
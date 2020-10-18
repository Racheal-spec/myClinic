const Burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav-links');
const navs = document.querySelectorAll('.nav-links li');

Burger.addEventListener('click', () => {
    navigation.classList.toggle('nav-open'); 
    
    navigation.addEventListener('click', () => {
        navigation.classList.toggle('nav-close');
    })
    
    navs.forEach((nav, index) => {
        if(nav.style.animation){
            nav.style.animation = ``; 
        }
        else{
            nav.style.animation = `nav-linksFade 2s ease Forwards ${index/ 4 + 0.1}s`;
        }
    });
    Burger.classList.toggle('toggle');
   
});
  
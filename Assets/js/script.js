const Burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-menu');
    
    Burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
       
    });
    navLinks.addEventListener('click', () => {
        navLinks.classList.toggle('close');
    })
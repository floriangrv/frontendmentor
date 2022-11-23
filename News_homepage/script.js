let menu = document.querySelector('.hamburger');
let close = document.querySelector('.close');
let navlist = document.querySelector('.nav-list');

menu.addEventListener("click", ()=> {
    navlist.classList.toggle('active');

    if (close.classList.contains('close')) {
        
        close.classList.toggle('menu-active');
        menu.classList.remove('menu-active');
    }
});

close.addEventListener("click", ()=> {
    navlist.classList.toggle('active');


    menu.classList.add('menu-active');
    close.classList.remove('menu-active');
});
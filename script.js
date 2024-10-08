const menu = document.querySelector(".menu");
const bar = document.querySelector(".navBar");
let isActive = false;

menu.addEventListener('click', () =>{
    bar.classList.toggle('active');
    if (bar.classList.contains('active')){
        document.body.classList.add('rotate');
    }
    else{
        document.body.classList.remove('rotate');
    }
});

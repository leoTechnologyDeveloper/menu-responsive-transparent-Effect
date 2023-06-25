const hamburguer = document.querySelector('.hamburguer');
const ulNav = document.querySelector('.ulNav');

hamburguer.addEventListener('click', showMenu);


function showMenu() {
    ulNav.classList.toggle('hide');
    
}


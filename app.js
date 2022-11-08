const showMenu = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('navigation');

showMenu.addEventListener('click', show => {
    menu.classList.toggle('show');
    showMenu.style.display = "none";
    closeMenu.style.display = "flex"
})

closeMenu.addEventListener('click', hide => {
    menu.classList.toggle('show');
    showMenu.style.display = "flex";
    closeMenu.style.display = "none"
})
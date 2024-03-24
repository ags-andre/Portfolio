/* elements */
const menuMobile = document.querySelector('.menu-mobile > div');
const navbar = document.querySelector('nav');

/* Functions */
const openMenu = () => {
    menuMobile.classList.toggle('opened');
    navbar.style.display = navbar.style.display !== 'block' ? 'block' : 'none';
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 600) {
        navbar.style.display = 'block';
    } else if(navbar.style.display != 'none') {
        navbar.style.display = 'none';
    }
    menuMobile.classList.remove('opened');
});
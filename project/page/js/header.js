/* elements */
const menuMobile = document.querySelector('.menu-mobile > div');
const navbar = document.querySelector('nav');
console.log(navbar)

/* Functions */
const openMenu = () => {
    menuMobile.classList.toggle('opened');
    navbar.style.display = navbar.style.display !== 'block' ? 'block' : 'none';
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 600) {
        navbar.style.display = 'block';
        menuMobile.classList.remove('opened');
    } else if(navbar.style.display != 'none') {
        navbar.style.display = 'none';
        menuMobile.classList.remove('opened');
    }
});
const navbar = document.querySelector('.navbar');
const homeLink = document.querySelector('.navigation a[href="#home"]');
const vilancielLink = document.querySelector('.navigation a[href="#vilanciel"]');
const aboutLink = document.querySelector('.navigation a[href="#about"]');

homeLink.addEventListener('click', () => {
    navbar.classList.remove('active');
});

vilancielLink.addEventListener('click', () => {
    navbar.classList.remove('active');
});

aboutLink.addEventListener('click', () => {
    navbar.classList.remove('active');
});

navbar.addEventListener('mouseover', () => {
    navbar.classList.add('hover');
});

navbar.addEventListener('mouseout', () => {
    navbar.classList.remove('hover');
});

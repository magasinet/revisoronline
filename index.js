const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/* close navigation bar after click on links */

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
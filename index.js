const toggleBtn = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/* close navigation bar after click on links */

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/* close navigation bar when clicking outside navbar */
document.addEventListener('click', (event) => {
    // Check if the clicked element is inside the navbar or the toggle button
    let isClickInsideNavbar = navbarLinks.contains(event.target) || toggleBtn.contains(event.target);
    
    // If the click is not inside the navbar, remove the 'active' class from navbarLinks
    if (!isClickInsideNavbar) {
        navbarLinks.classList.remove('active');
    }
});
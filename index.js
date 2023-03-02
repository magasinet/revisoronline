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


/* show banner-text */
let bannerText = document.querySelector('.banner-text');

// Wait for 0.5 seconds, then add the 'show' class
setTimeout(function() {
    bannerText.classList.add('show');
  }, 250);




/* Animation offer */
// Select the offer section and offer items
const offerSection = document.querySelector('#offer-section');
const offerItems = document.querySelectorAll('.offer-item');

// Function to fade in the offer items
function fadeInElements() {
  // Loop through each offer item
  offerItems.forEach((item, index) => {
    // Add a delay to stagger the fade-in effect
    setTimeout(() => {
      // Add the fade-in-offer class to the offer item
      item.classList.add('fade-in-offer');
    }, 250 * index); // The delay is proportional to the index of the item
  });
}

// Function to handle the intersection of the offer section
function handleIntersection(entries) {
  entries.forEach(entry => {
    // If the section is in view
    if (entry.isIntersecting) {
      // Call the function to fade in the offer items
      fadeInElements();
    }
  });
}

// Create a new IntersectionObserver object to observe the offer section
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  threshold: 0.2 // Trigger the intersection at 50% visibility
});

// Observe the offer section with the observer object
observer.observe(offerSection);

  

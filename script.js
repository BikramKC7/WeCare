function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling; // Get the corresponding answer
    const arrow = questionElement.querySelector('.arrow'); // Get the arrow image

    // Toggle answer display
    if (answerElement.style.display === "block") {
        answerElement.style.display = "none"; // Hide answer
        arrow.src = "Media/downarrow.png"; // Change arrow to down
    } else {
        answerElement.style.display = "block"; // Show answer
        arrow.src = "Media/uparrow.png"; // Change arrow to up
    }
}


// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to handle adding the 'active' class
function activateCurrentPage() {
    // Get the current page path
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through all the links and check if the href matches the current page
    navLinks.forEach(link => {
        // Remove the active class from all links
        link.classList.remove('active');

        // If the link's href matches the current page, add 'active' class
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call the function 
window.onload = activateCurrentPage;

// form form validation and submission

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form inputs
    if (!firstName || !lastName || !email || !phone || !message) {
        displayMessage('Please fill in all fields.', 'error')
        return
    }

    if (!validateEmail(email)) {
        displayMessage('Please enter a valid email address.', 'error');
        return;
    }

    if (!validatePhone(phone)) {
        displayMessage('Please enter a valid phone number.', 'error');
        return
    }

    // Simulate a successful form submission (you can replace with actual backend logic)
    displayMessage('Your message has been sent successfully!', 'success');

    // Reset the form
    document.getElementById('contactForm').reset();
})

// Function to display feedback messages
function displayMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = message;
    formMessage.className = type; // Set the class for styling (error or success)
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

var swiper = new Swiper(".container", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".arrow-circle left-arrow",
      prevEl: ".arrow-circle right-arrow",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
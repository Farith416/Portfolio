const btnMenu = document.getElementById('btn-menu');
const navLinks = document.querySelector('.nav-links');

btnMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;
    
    const firstName = document.getElementById("Fname");
    const lastName = document.getElementById("Lname");
    const phoneNumber = document.getElementById("num");
    const email = document.getElementById("email");
    const message = document.getElementById("msg");

    if (!firstName.value.trim()) {
        alert("First Name is required.");
        isValid = false;
    } else if (!lastName.value.trim()) {
        alert("Last Name is required.");
        isValid = false;
    } else if (!phoneNumber.value.trim()) {
        alert("Phone Number is required.");
        isValid = false;
    } else if (!email.value.trim()) {
        alert("Email Address is required.");
        isValid = false;
    } else if (!message.value.trim()) {
        alert("Message is required.");
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully");
        alert("Farith will contact u soon");
        document.getElementById("myForm").submit(); 
    }
});

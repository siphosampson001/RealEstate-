const properties = [
    {
        title: "Luxury Apartment",
        description: "A beautiful luxury apartment in the city center.",
        price: "$1,200/month",
        image: "assets/images/P3.jpg",
    },
    {
        title: "Cozy Cottage",
        description: "A cozy cottage in a quiet neighborhood.",
        price: "$900/month",
        image: "assets/images/P2.jpg",
    },
    {
        title: "Modern Office Space",
        description: "A modern office space perfect for startups.",
        price: "$2,000/month",
        image: "assets/images/P1.jpg",
    }
];

function loadProperties() {
    const propertyList = document.getElementById('property-list');
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}" style="width: 100%;">
            <h3>${property.title}</h3>
            <p>${property.description}</p>
            <p><strong>${property.price}</strong></p>
        `;
        propertyList.appendChild(propertyCard);
    });
}

// Load properties for both index.html and properties.html
document.addEventListener('DOMContentLoaded', loadProperties);

// Contact form functionality (if needed)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = this[0].value;
        const email = this[1].value;
        const message = this[2].value;

        // Log form submission
        console.log('Form Submitted:', { name, email, message });

        // Clear the form after submission
        this.reset();

        // Confirmation message
        alert("Thank you for your message! We will get back to you soon.");
    });
}
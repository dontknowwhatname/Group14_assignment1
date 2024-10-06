function openModal() {
    document.getElementById('appointmentModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('appointmentModal').style.display = 'none';
}

// Show appointment success modal
function showSuccessModal() {
    document.getElementById("successModal").style.display = "block";
}

// Close appointment success modal
function closeSuccessModal() {
    document.getElementById("successModal").style.display = "none";
}

// Handle form submission
document.getElementById('appointmentForm').onsubmit = function(event) {
    event.preventDefault();
    // Get form data and process it
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    alert(`Appointment Successful!\nName: ${name}\nService: ${service}\nDate: ${date}\nTime: ${time}`);
    closeModal(); // Close the modal after submission
};

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Move forward
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move backward
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate offset
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Auto carousel
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems; // Move forward
    updateCarousel();
}, 3000); // Automatically switch every 3 seconds

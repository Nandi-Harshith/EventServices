function redirectToPhotography() {
  try {
    window.location.href = 'photography.html';
  } catch (error) {
    console.error("Error redirecting to photography page:", error);
    // Handle the error, e.g., display an error message to the user
  }
}

function bookService(service) {
  // Consider using a more interactive confirmation method instead of an alert
  console.log(`You have selected ${service} service.`);
  // Add logic to process the service selection, e.g., store it in local storage or send it to a server
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Add logic to handle form data, e.g., send it to a server
  console.log('Contact form submitted');
});

// Geolocation
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // Implement logic to find nearby service providers based on latitude and longitude
  });
} else {
  console.log('Geolocation is not available');
  // Provide an alternative way to find service providers, e.g., user-entered address
}

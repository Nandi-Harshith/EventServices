function redirectToPhotography() {
  try {
    window.location.href = 'photography.html';
  } catch (error) {
    console.error("Error redirecting to photography page:", error);
    
  }
}
function bookService(service) {
  console.log(`You have selected ${service} service.`);
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Contact form submitted');
});
// Geolocation
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
} else {
  console.log('Geolocation is not available');
}

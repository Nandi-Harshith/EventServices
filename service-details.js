document.addEventListener('DOMContentLoaded', () => {
    const service = JSON.parse(localStorage.getItem('selectedService'));

    if (service) {
        const serviceDetailsSection = document.getElementById('service-details');
        serviceDetailsSection.innerHTML = `
            <h2>${service.name}</h2>
            <p><i class="fas fa-map-marker-alt icon"></i> ${service.address}</p>
            <p><i class="fas fa-phone icon"></i> ${service.phone}</p>
            <p><i class="fas fa-envelope icon"></i> ${service.email}</p>
            <p>Timings: ${service.timings}</p>
        `;
    } else {
        const serviceDetailsSection = document.getElementById('service-details');
        serviceDetailsSection.innerHTML = '<p>No service details available.</p>';
    }
});

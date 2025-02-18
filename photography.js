document.addEventListener('DOMContentLoaded', () => {
    const services = generateUniqueServices(20); // Reduced count for better performance

    const serviceList = document.getElementById('service-list');

    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service');
        serviceItem.innerHTML = `
            <h3>${service.name}</h3>
            <p><i class="fas fa-map-marker-alt icon"></i> ${service.address}</p>
            <p><i class="fas fa-phone icon"></i> ${service.phone}</p>
            <p><i class="fas fa-envelope icon"></i> ${service.email}</p>
        `;
        serviceItem.addEventListener('click', () => {
            localStorage.setItem('selectedService', JSON.stringify(service));
            window.location.href = 'service-details.html';
        });
        serviceList.appendChild(serviceItem);
    });

    function generateUniqueServices(count) {
        const names = [
            "Ravi Kumar", "Sita Ram", "Lakshmi Narayana", "Vijay Photography", "Sunshine Studio", 
            "Amit Sharma", "Neha Studio", "Rajesh Digital", "Kiran Photography", "Dream Clicks",
            "Anil Kumar", "Pooja Studio", "Ramesh Photography", "Creative Studio", "Perfect Shots",
            "Suresh Kumar", "Priya Studio", "Ganesh Photography", "Elegant Studio", "Memories Captured",
            "Manoj Studio", "Deepak Photography", "Shivani Studio", "Arjun Photography", "Nisha Studio"
        ];
        const addresses = [
            "123, Beach Road, Visakhapatnam", "456, MVP Colony, Visakhapatnam", "789, Gajuwaka, Visakhapatnam",
            "101, Dwaraka Nagar, Visakhapatnam", "202, Seethammapeta, Visakhapatnam", "303, Maddilapalem, Visakhapatnam",
            "404, Akkayyapalem, Visakhapatnam", "505, Siripuram, Visakhapatnam", "606, Waltair Uplands, Visakhapatnam",
            "707, Ram Nagar, Visakhapatnam", "808, Kancharapalem, Visakhapatnam", "909, Arilova, Visakhapatnam",
            "1010, Pendurthi, Visakhapatnam", "1111, Simhachalam, Visakhapatnam", "1212, Madhurawada, Visakhapatnam",
            "1313, Bheemunipatnam, Visakhapatnam", "1414, Anakapalle, Visakhapatnam", "1515, Yendada, Visakhapatnam",
            "1616, Gopalapatnam, Visakhapatnam", "1717, Pedda Waltair, Visakhapatnam"
        ];
        const phones = [
            "0891 1234567", "0891 2345678", "0891 3456789", "0891 4567890", "0891 5678901",
            "0891 6789012", "0891 7890123", "0891 8901234", "0891 9012345", "0891 0123456",
            "0891 1234568", "0891 2345679", "0891 3456780", "0891 4567891", "0891 5678902",
            "0891 6789013", "0891 7890124", "0891 8901235", "0891 9012346", "0891 0123457"
        ];
        const emails = [
            "ravi@example.com", "sita@example.com", "lakshmi@example.com", "vijay@example.com", "sunshine@example.com",
            "amit@example.com", "neha@example.com", "rajesh@example.com", "kiran@example.com", "dreamclicks@example.com",
            "anil@example.com", "pooja@example.com", "ramesh@example.com", "creative@example.com", "perfectshots@example.com",
            "suresh@example.com", "priya@example.com", "ganesh@example.com", "elegant@example.com", "memories@example.com",
            "manoj@example.com", "deepak@example.com", "shivani@example.com", "arjun@example.com", "nisha@example.com"
        ];
        const timings = [
            "9 AM - 6 PM", "10 AM - 7 PM", "8 AM - 5 PM", "11 AM - 8 PM", "7 AM - 4 PM"
        ];

        const services = [];
        const usedNames = new Set();
        while (services.length < count) {
            const name = names[Math.floor(Math.random() * names.length)];
            if (usedNames.has(name)) continue;
            usedNames.add(name);
            const address = addresses[Math.floor(Math.random() * addresses.length)];
            const phone = phones[Math.floor(Math.random() * phones.length)];
            const email = emails[Math.floor(Math.random() * emails.length)];
            const timing = timings[Math.floor(Math.random() * timings.length)];
            services.push({ name, address, phone, email, timing });
        }
        return services;
    }
});

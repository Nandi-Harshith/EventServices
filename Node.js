const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/book', (req, res) => {
    const { service, name, email } = req.body;
    console.log(`Service: ${service}, Name: ${name}, Email: ${email}`);
    res.send('Booking received!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
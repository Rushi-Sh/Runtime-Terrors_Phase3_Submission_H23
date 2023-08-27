const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000; // You can change this port

app.use(bodyParser.json());

app.post('/append', (req, res) => {
    const userInput = req.body.userInput;
    const csvData = `${userInput}\n`;

    fs.appendFile('data.csv', csvData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error appending to CSV');
        } else {
            console.log('Data appended to CSV');
            res.status(200).send('Data appended to CSV');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
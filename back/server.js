import express from 'express';
import data from './data.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 4132;

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server Running');
})

// // SEND
// app.get("/*", (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

app.listen(port, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log(`Server running at http://localhost:${port}`);
});
 
// POST
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})
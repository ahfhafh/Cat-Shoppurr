import express from 'express';
import data from './data.js';

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 4132;

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server Running');
})

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message:'Product Not Found'});
    }
})

app.listen(port, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log(`Server running at http://localhost:${port}`);
});
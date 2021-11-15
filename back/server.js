import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/Shoppurr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB')
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 22017;

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

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

app.listen(port, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log(`Server running at http://localhost:${port}`);
});
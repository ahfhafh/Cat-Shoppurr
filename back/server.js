import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-undef
const port = process.env.PORT || 22017;
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/Shoppurr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB')
});

app.get('/', (req, res) => {
    res.send('Server Running');
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
});

app.listen(port, err => {
    if (err) {
        return console.log("Error", err);
    }
    console.log(`Server running at http://localhost:${port}`);
});
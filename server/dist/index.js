import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const port = 3000;
import { createCategory } from './controllers/category.controller.js';
import { createMenuItem } from "./controllers/menuItem.controller.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const connectDB = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/menuBuilder');
        console.log('Mongoose is connected!');
    }
    catch (error) {
        console.log('Error for Mongoose side!');
    }
};
//Routes in Here
//For menu Items
app.get('/', (req, res) => {
    res.send('Hello from backend finally!');
});
app.post('/item/post', createMenuItem);
//For category Items
app.post('/category/post', createCategory);
app.get('/category', (req, res) => {
    res.send('I am from backEnd category!');
});
app.listen(port, () => {
    console.log('Server Running ...');
    connectDB();
});

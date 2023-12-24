import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const port = 3000;
import { createTimeOfMenu, getAllTimeOfMenu, getAllTimeOfMenuById } from './controllers/timeOfMenu.controller.js';
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
app.post('/category/post', createTimeOfMenu);
app.get('/category', getAllTimeOfMenu);
app.get('/category/:id', getAllTimeOfMenuById);
app.listen(port, () => {
    console.log('Server Running ...');
    connectDB();
});

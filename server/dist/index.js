import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const port = 3000;
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
app.get('/', (req, res) => {
    res.send('Hello from backend finally!');
});
app.listen(port, () => {
    console.log('Server Running ...');
    connectDB();
});

import express  from "express";
import cors from "cors"
import mongoose, { mongo } from "mongoose";
import { Request , Response } from "express";


const port: number = 3000
import { createCategory } from './controllers/category.controller.js';
import { menuItemModel } from './models/menuItem.model.js';
import { createMenuItem } from "./controllers/menuItem.controller.js";
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


const connectDB = ()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/menuBuilder');
        console.log('Mongoose is connected!');
        
    } catch (error) {
        console.log('Error for Mongoose side!');
        
    }
}


//Routes in Here

//For menu Items
app.get('/', (req: Request, res: Response)=>{
    res.send('Hello from backend finally!')
})

app.post('/item/post', createMenuItem)


//For category Items

app.post('/category/post',createCategory)

app.get('/category',(req: Request, res: Response)=>{
    res.send('I am from backEnd category!')
})





app.listen(port, ()=>{
    console.log('Server Running ...');
    connectDB()
    
})

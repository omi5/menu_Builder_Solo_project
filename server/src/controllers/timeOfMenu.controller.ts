import {timeOfMenuModel}  from '../models/timeOfMenu.model.js'
import { Request , Response } from "express";


export const createTimeOfMenu = (req: Request, res: Response)=>{
  try {
    const newCategory = new timeOfMenuModel({
        categoryName: req.body.categoryName,
        startDay:  req.body.startDay,
        endDay:  req.body.endDay,
        description:  req.body.description,
        startTime: req.body.startTime,
        endTime:  req.body.endTime

    })
    const saveCategory = newCategory.save()
    res.status(200).send(saveCategory)
  } 
  catch (error: any) {
    res.status(500).send({ error: error.message });
}
}

export const getAllTimeOfMenu = (req: Request, res: Response)=>{
  timeOfMenuModel.find().then((data :any)=> {
    res.send(data)
  })
}

export const getAllTimeOfMenuById = (req: Request, res: Response)=>{
  let id= req.params.id;
  timeOfMenuModel.findOne({_id: id}).then((data :any)=> {
    if(!data){
      return res.status(404).send("Data is not found")
      }else{
        res.send(data);
        }
  })
}



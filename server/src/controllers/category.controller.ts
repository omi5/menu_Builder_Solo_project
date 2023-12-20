import {categoryModel}  from '../models/category.model.js'
import { Request , Response } from "express";


export const createCategory = (req: Request, res: Response)=>{
  try {
    const newCategory = new categoryModel({
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



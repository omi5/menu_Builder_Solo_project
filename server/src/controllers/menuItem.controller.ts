import {menuItemModel}  from '../models/menuItem.model.js'
import { Request , Response } from "express";


export const createMenuItem = (req: Request, res: Response)=>{
    try {
        const newItem = new menuItemModel({
            restaurantId: req.body.restaurantId,
            categories: {
                id: req.body.categoryId,
                name: req.body.categoryName
            },
            items:{
                itemId: req.body.itemId,
                itemName: req.body.itemName,
                itemImage: req.body.itemImage,
                itemDescription: req.body.itemDescription,
                itemPrice: req.body.itemPrice,
                itemCalories: req.body.itemCalories,
                categoryId: req.body.categoryId,
                timeOfDay:[{categoryName: req.body.categoryName}],
                itemPortionsize: req.body.itemPortionsize,
                itemPreparationtime: req.body.itemPreparationtime,
                itemLastingTime: req.body.itemLastingTime,
                itemPackingType: req.body.itemPackingType,
                servingTemperature: req.body.servingTemperature,
                itemDietaryRestrictions:[{allergens: 'req.body.itemAllergens'}, {allergens: 'allergens1'}],
                itemPackingDimention: {
                    dimensionLength: req.body.itemPackingDimentionLength,
                    dimensionWidth: req.body.itemPackingDimentionWidth,
                    dimensionHeight: req.body.itemPackingDimentionHeight,
                },
                ingredients:[{
                    id: req.body.ingredientId,
                    restaurantId: req.body.restaurantId,
                    ingredientName: req.body.ingredientName,
                    unit: req.body.unit,
                    quantity: req.body.quantity,
                    costPerUnit: req.body.costPerUnit,
                    caloriePerUnit: req.body.caloriePerUnit
                }]
            },
            options:[
                {
                    add: [{
                        ingredientName:req.body.addIngredientName,
                        quantity: req.body.addIngredientQuantity,
                        ingredient: [{
                            id: req.body.ingredientId,
                            restaurantId: req.body.restaurantId,
                            ingredientName: req.body.ingredientName,
                            unit: req.body.unit,
                            quantity: req.body.quantity,
                            costPerUnit: req.body.costPerUnit,
                            caloriePerUnit: req.body.caloriePerUnit
                        }]
                    }],
                    no: [{
                        ingredientName: req.body.removeIngredientName,
                        quantity: req.body.removeIngredientQuantity,
                        ingredient: [{
                            id: req.body.ingredientId,
                            restaurantId: req.body.restaurantId,
                            ingredientName: req.body.ingredientName,
                            unit: req.body.unit,
                            quantity: req.body.quantity,
                            costPerUnit: req.body.costPerUnit,
                            caloriePerUnit: req.body.caloriePerUnit
                        }]
                    }]

                }
            ]
            
        })

        const saveNewItem = newItem.save()
        res.status(200).send(saveNewItem)

    } catch (error:any) {
        res.send('Post does not save!')
    }
}
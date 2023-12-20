import mongoose, { mongo } from "mongoose";

const  CategoriesTypeSchema = new mongoose.Schema({
    id: Number,
    name: String
})

const timeOfDay = new mongoose.Schema({
    categoryName: String
})

const ItemDietaryRestrictions = new mongoose.Schema({
    allergens: String
})
const packing = new mongoose.Schema({
    dimensionLength: Number,
    dimensionWidth: Number,
    dimensionHeight: Number,
})

const ingredients = new mongoose.Schema({
        id: Number,
        restaurantId: Number,
		ingredientName: String,
		unit: String,
		quantity: Number,
		costPerUnit: Number,
		caloriePerUnit: Number
})


const itemSchema = new mongoose.Schema({
    itemId: Number,
	itemName: String,
	itemImage: String,
	itemDescription: String,
	itemPrice: Number,
	itemCalories: Number,
	categoryId: Number,
	timeOfDay: [timeOfDay],
	itemPortionsize: Number,
	itemPreparationtime: Number,
	itemLastingTime: Number,
    itemPackingType: String,
	servingTemperature: Number,
	itemDietaryRestrictions: [ItemDietaryRestrictions],
    itemPackingDimention: packing,
    ingredients: [ingredients]
})

const addOption = new mongoose.Schema({
    ingredientName: String,
    quantity: Number,
    ingredients: [ingredients]
})

const noOption = new mongoose.Schema({
    ingredientName: String,
    quantity: Number,
    ingredient: [ingredients]
})

const menuItemSchema = new mongoose.Schema({
    restaurantId : Number,
    categories: [CategoriesTypeSchema],
    items: [itemSchema],
    options: [{ add : [addOption] , no: [noOption]}]
        
})

 export const menuItemModel = mongoose.model('menuItems', menuItemSchema)
        

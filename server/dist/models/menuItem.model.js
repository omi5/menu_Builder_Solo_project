import mongoose from "mongoose";
const CategoriesTypeSchema = new mongoose.Schema({
    id: Number,
    name: String
});
// const timeOfDay = new mongoose.Schema({
//     categoryName: String
// })
const ItemDietaryRestrictions = new mongoose.Schema({
    allergens: String
});
const packing = new mongoose.Schema({
    dimensionLength: Number,
    dimensionWidth: Number,
    dimensionHeight: Number,
});
const ingredients = new mongoose.Schema({
    id: Number,
    restaurantId: Number,
    ingredientName: String,
    unit: String,
    quantity: Number,
    costPerUnit: Number,
    caloriePerUnit: Number
});
const addOption = new mongoose.Schema({
    ingredientName: String,
    quantity: Number,
    ingredients: [ingredients]
});
const noOption = new mongoose.Schema({
    ingredientName: String,
    quantity: Number,
    ingredient: [ingredients]
});
const itemSchema = new mongoose.Schema({
    itemId: Number,
    itemName: String,
    itemImage: String,
    itemDescription: String,
    itemPrice: Number,
    itemCalories: Number,
    categoryId: Number,
    timeOfDay: [String, String, String],
    itemPortionsize: Number,
    itemPreparationtime: Number,
    itemLastingTime: Number,
    itemPackingType: String,
    servingTemperature: Number,
    itemDietaryRestrictions: [ItemDietaryRestrictions],
    itemPackingDimention: packing,
    ingredients: [ingredients],
    options: { add: [addOption], no: [noOption] }
});
const menuItemSchema = new mongoose.Schema({
    restaurantId: Number,
    categories: [CategoriesTypeSchema],
    items: [itemSchema],
});
export const menuItemModel = mongoose.model('menuItems', menuItemSchema);
// import mongoose, { Document, Schema, Model } from 'mongoose';
// interface CategoriesType extends Document {
//     id: number;
//     name: string;
// }
// interface TimeOfDay extends Document {
//     categoryName: string;
// }
// interface ItemDietaryRestrictions extends Document {
//     allergens: string;
// }
// interface Packing extends Document {
//     dimensionLength: number;
//     dimensionWidth: number;
//     dimensionHeight: number;
// }
// interface Ingredients extends Document {
//     id: number;
//     restaurantId: number;
//     ingredientName: string;
//     unit: string;
//     quantity: number;
//     costPerUnit: number;
//     caloriePerUnit: number;
// }
// interface AddOption extends Document {
//     ingredientName: string;
//     quantity: number;
//     ingredients: Ingredients[];
// }
// interface NoOption extends Document {
//     ingredientName: string;
//     quantity: number;
//     ingredient: Ingredients[];
// }
// interface MenuItem extends Document {
//     restaurantId: number;
//     categories: CategoriesType[];
//     items: Item[];
//     options: {
//         add: AddOption[];
//         no: NoOption[];
//     };
// }
// interface Item extends Document {
//     itemId: number;
//     itemName: string;
//     itemImage: string;
//     itemDescription: string;
//     itemPrice: number;
//     itemCalories: number;
//     categoryId: number;
//     timeOfDay: TimeOfDay[];
//     itemPortionsize: number;
//     itemPreparationtime: number;
//     itemLastingTime: number;
//     itemPackingType: string;
//     servingTemperature: number;
//     itemDietaryRestrictions: ItemDietaryRestrictions[];
//     itemPackingDimention: Packing;
//     ingredients: Ingredients[];
// }
// const CategoriesTypeSchema: Schema<CategoriesType> = new Schema({
//     id: Number,
//     name: String
// });
// const timeOfDaySchema: Schema<TimeOfDay> = new Schema({
//     categoryName: String
// });
// const ItemDietaryRestrictionsSchema: Schema<ItemDietaryRestrictions> = new Schema({
//     allergens: String
// });
// const packingSchema: Schema<Packing> = new Schema({
//     dimensionLength: Number,
//     dimensionWidth: Number,
//     dimensionHeight: Number
// });
// const ingredientsSchema: Schema<Ingredients> = new Schema({
//     id: Number,
//     restaurantId: Number,
//     ingredientName: String,
//     unit: String,
//     quantity: Number,
//     costPerUnit: Number,
//     caloriePerUnit: Number
// });
// const addOptionSchema: Schema<AddOption> = new Schema({
//     ingredientName: String,
//     quantity: Number,
//     ingredients: [ingredientsSchema]
// });
// const noOptionSchema: Schema<NoOption> = new Schema({
//     ingredientName: String,
//     quantity: Number,
//     ingredient: [ingredientsSchema]
// });
// const itemSchema: Schema<Item> = new Schema({
//     itemId: Number,
//     itemName: String,
//     itemImage: String,
//     itemDescription: String,
//     itemPrice: Number,
//     itemCalories: Number,
//     categoryId: Number,
//     timeOfDay: [timeOfDaySchema],
//     itemPortionsize: Number,
//     itemPreparationtime: Number,
//     itemLastingTime: Number,
//     itemPackingType: String,
//     servingTemperature: Number,
//     itemDietaryRestrictions: [ItemDietaryRestrictionsSchema],
//     itemPackingDimention: packingSchema,
//     ingredients: [ingredientsSchema]
// });
// const menuItemSchema: Schema<MenuItem> = new Schema({
//     restaurantId: Number,
//     categories: [CategoriesTypeSchema],
//     items: [itemSchema],
//     options: {
//         add: [addOptionSchema],
//         no: [noOptionSchema]
//     }
// });
// export const menuItemModel: Model<MenuItem> = mongoose.model('menuItems', menuItemSchema);

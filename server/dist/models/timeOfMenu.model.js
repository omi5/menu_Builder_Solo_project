//Schema
import mongoose from "mongoose";
const timeOfMenuSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    restaurantId: {
        type: Number
    },
    startDay: {
        type: Number,
        required: true,
        min: 0,
        max: 6 // Assuming Sunday to Saturday representation (0-6)
    },
    endDay: {
        type: Number,
        required: true,
        min: 0,
        max: 6
    },
    description: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    }
});
export const timeOfMenuModel = mongoose.model('timeOfCategry', timeOfMenuSchema);

import { categoryModel } from '../models/category.model.js';
export const createCategory = (req, res) => {
    try {
        const newCategory = new categoryModel({
            categoryName: req.body.categoryName,
            startDay: req.body.startDay,
            endDay: req.body.endDay,
            description: req.body.description,
            startTime: req.body.startTime,
            endTime: req.body.endTime
        });
        const saveCategory = newCategory.save();
        res.status(200).send(saveCategory);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
};

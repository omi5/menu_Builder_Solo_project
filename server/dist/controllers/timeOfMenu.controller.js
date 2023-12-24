import { timeOfMenuModel } from '../models/timeOfMenu.model.js';
export const createTimeOfMenu = (req, res) => {
    try {
        const newCategory = new timeOfMenuModel({
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
export const getAllTimeOfMenu = (req, res) => {
    timeOfMenuModel.find().then((data) => {
        res.send(data);
    });
};
export const getAllTimeOfMenuById = (req, res) => {
    let id = req.params.id;
    timeOfMenuModel.findOne({ _id: id }).then((data) => {
        if (!data) {
            return res.status(404).send("Data is not found");
        }
        else {
            res.send(data);
        }
    });
};

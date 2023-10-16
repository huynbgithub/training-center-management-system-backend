const classModel = require("../models/classes");
// const bcrypt = require("bcryptjs");

const classController = {
    async readAllClasses(req, res) {
        try {
            const classes = await classModel.find({})
            res.json({ classes });
        } catch (err) {
            res.json(err.message);
        }
    },

    async readSingleClass(req, res) {
        try {
            const singleClass = await classModel.findById(req.params.id)
            res.json({ singleClass });
        } catch (err) {
            res.json(err.message);
        }
    },

    async createClass(req, res) {
        const { classCode, className } = req.body;
        try {
            const newClass = await classModel.create({ classCode, className })
            res.json(newClass);
        } catch (err) {
            res.json(err.message);
        }
    },

    async updateClass(req, res) {
        const { classCode, className } = req.body;
        try {
            const updatedClass = await classModel.findByIdAndUpdate(
                req.params.id,
                { $set: { classCode: classCode, className: className } },
                { new: true })
            res.json(updatedClass);
        } catch (err) {
            res.json(err.message);
        }
    },

    async deleteClass(req, res) {
        try {
            const deletedClass = await classModel.findByIdAndDelete(req.params.id)
            res.json(deletedClass);
        } catch (err) {
            res.json(err.message);
        }
    }

}

module.exports = classController;
const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
    {
        classCode: {
            type: String,
            required: true,
            maxlength: 3,
            match: /^[A-Z]{1}\d{2}$/,
        },
        className: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const classModel = mongoose.model("Classes", classSchema);
module.exports = classModel;
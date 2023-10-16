const express = require("express");
const router = express.Router();
const classController = require("../controller/classes");

router.get("/readAllClasses", classController.readAllClasses);
router.get("/readSingleClass/:id", classController.readSingleClass);
router.post("/createClass", classController.createClass);
router.put("/updateClass/:id", classController.updateClass);
router.delete("/deleteClass/:id", classController.deleteClass);

module.exports = router;
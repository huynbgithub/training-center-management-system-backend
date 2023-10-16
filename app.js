const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");
const cors = require("cors");

// Import Router
const authRouter = require("./routes/auth");
const classRouter = require("./routes/classes");
// const customizeRouter = require("./routes/customize");

// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");
// const CreateAllFolder = require("./config/uploadFolderCreateScript");

/* Create All Uploads Folder if not exists | For Uploading Images */
// CreateAllFolder();

// Database Connection
mongoose
    .connect(process.env.DATABASE)
    .then(console.log("Mongodb Database Connected Successfully")
    )
    .catch((err) => console.log(err));

// Middleware
// app.use(morgan("dev"));
// app.use(cookieParser());
app.use(cors());
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// Routes
app.use("/", authRouter);
app.use("/class", loginCheck, classRouter);

// Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});
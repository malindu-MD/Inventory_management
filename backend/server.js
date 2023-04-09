const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require("cors");
const multer = require("multer");


const app = express();
require("dotenv").config();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "./public/uploads/"));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });




const PORT = process.env.PORT || 8070;

app.use(express.static("public"));

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

    useNewUrlParser: true

})

const connection = mongoose.connection;
connection.once("open", () => {

    console.log("Monodb Connection success!");

});
// set up session
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
}));

app.post("/upload", upload.single("image"), (req, res, next) => {
    return res.json({
      path: `/uploads/${req.file.filename}`
    });
  });

const categoryRouter = require("./routes/categories.js");
app.use("/categories", categoryRouter);

const userRouter = require("./routes/users.js");
app.use("/users", userRouter);



app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})

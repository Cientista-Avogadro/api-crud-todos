const express = require("express");
const router = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const PORT = process.env.PORT || 8000;

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});

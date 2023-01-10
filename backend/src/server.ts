const express = require("express");
const cors = require("cors");
const router = require("./app/routes/userRoutes");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log("Server is running"));

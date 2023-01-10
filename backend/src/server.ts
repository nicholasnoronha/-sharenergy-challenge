import express from "express";
import cors from "cors";
import router from "./routes/userRoutes";

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log("Server is running"));

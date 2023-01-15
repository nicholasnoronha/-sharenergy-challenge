import express from "express";
import cors from "cors";
import routes from "./routes";
import AssignDecoded from "./adapters/AssignDecoded";

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AssignDecoded.run);
app.use(routes);

app.listen(port, () => console.log("Server is running on port: " + port));

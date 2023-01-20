import express from "express";
import cors from "cors";
import routes from "./routes";
import Authorization from "./adapters/Authorization";
import swaggerJsonFile from "./docs/swagger.json";
import swaggerUi from "swagger-ui-express";

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsonFile));
app.use(Authorization.run);
app.use(routes);

app.listen(port, () => console.log("Server is running on port: " + port));

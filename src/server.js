import express from "express";
require("dotenv").config();

import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";



const app = express();
const PORT = process.env.PORT || 8000;

configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoutes(app);

app.listen(PORT, () => {
    console.log(">>> JWT BACKEND IS RUNING ON THE PORT =" + PORT);
})
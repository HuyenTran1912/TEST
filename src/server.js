import express from "express";
require("dotenv").config();

import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8000;

configViewEngine(app);
initWebRoutes(app);


app.listen(PORT, () => {
    console.log(">>> JWT BACKEND IS RUNING ON THE PORT =" + PORT);
})
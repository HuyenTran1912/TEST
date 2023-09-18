/** file điều hướng viết ở đây */
import express from "express";
import homeController from '../controller/HomeController';

const router = express.Router(); /** định nghĩa biến, thằng express có 1 hàm là router*/


const handleHelloWorld = (req, res) => {
    return res.send ("Hello World");
}

const initWebRoutes = (application) => {
    router.get("/", homeController.handleHelloWorld); 
    router.get("/user", homeController.handleUserPage); 
    
    

    return application.use("/", router)
}

export default initWebRoutes;

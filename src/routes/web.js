/** file điều hướng viết ở đây */
import express from "express";

const router = express.Router(); /** định nghĩa biến, thằng express có 1 hàm là router*/

const initWebRoutes = (application) => {
    router.get("/", (req, res) => {
        return res.send("hello world");
    })
    router.get("/about", (req, res) => {
        return res.send("my name is tran");
    })
    return application.use("/MYWEBSITE", router)
}

export default initWebRoutes;

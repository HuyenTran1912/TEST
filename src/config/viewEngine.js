import express from "express";
/**
 * 
 * @param {*} app - express app
 */

const configViewEngine = (app)  => {
    app.use(express.static('./src/public'));
    app.set("view engine", "ejs"); /**định nghĩa view engine, tao dùng cái view engine có tên là ejs, nghĩa là dùng công nghệ gì để viết html */
    app.set("view", "./src/views");/** định nghĩa nơi lưu trữ file */


}

export default configViewEngine;

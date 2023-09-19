import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt',
  port: 3310
});





const handleHelloWorld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    //model => get data from database
    return res.render("user.ejs");
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let usename = req.body.usename;

    connection.query(
        'SELECT * FROM users' ,
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
    return res.send("handleCreateNewUser");
}

module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser
}

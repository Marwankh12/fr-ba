let mysql = require("mysql2")


module.exports = mysql.createConnection({
    port : 3306,
    database : "data" , 
    user : "root" ,
    host : "localhost"
})
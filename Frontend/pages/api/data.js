

export default   function handler(req, res) {


  let mysql = require("mysql2")

  let connection =  mysql.createConnection(
    {
      host : "localhost",
      password : "",
      user : "root",
      port : 3306,
      database : "data"
    }
  )
  connection.connect()
  
  let arr = []
  function getData() {
    let query = "select * from products"
   let data =  connection.query(query ,  (err , value) => {
    if(value) {
      console.log(value)
   
      arr = [...value]
    }
  
    console.log(arr)

    res.status(200).json({ products: arr})
   })

  }getData()

  
  connection.end()
}






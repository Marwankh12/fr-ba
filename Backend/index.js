// const con = require("./config/db_con.js")
const express = require("express")
const app = express()
const cors = require("cors")
const {config} = require("dotenv")
config()
app.use(express.urlencoded({extended : true}))

let port = process.env.PORT || 5000

app.use(cors({origin :  "http://localhost:3000"}))

// app.use(cors())


app.get("/" , (req ,res) => {
  res.send("hello from express")
})



app.listen(port)

import express from "express";
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from "./config/connectDB"
require("dotenv").config()

let app = express()

// config body-parser and json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.json());

// Set view engine
viewEngine(app)
// Set web route
initWebRoutes(app)

// Connect Database
connectDB()

app.get("/test", (req, res) => {
    console.log(req.route)
    console.log(req.originalUrl)
    console.log(req.path)
    res.send('Test Page')
})


let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Backen NodeJS is running on the port ${port}`)
})
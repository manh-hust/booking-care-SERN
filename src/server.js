import express from "express";
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
require("dotenv").config()

let app = express()

// config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.json());

viewEngine(app)
initWebRoutes(app)

app.get("/test", (req, res) => {
    console.log(req.route)
    console.log(req.originalUrl)
    console.log(req.path)
    res.send('Test Page')
})

app.locals.name = "DD Manh"

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Backen NodeJS is running on the port ${port}`)
})
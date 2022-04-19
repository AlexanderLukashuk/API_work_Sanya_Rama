const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const ejs = require('ejs')

const PORT = 3000

app.set("view engine", "ejs")

app.use('/static', express.static('static'))
app.use(bodyparser.urlencoded({extended: true}))

app.use("/", require("./routers/index"))
app.use("/", require("./routers/about"))
app.use("/", require("./routers/workpage"))
app.use("/", require("./routers/login"))
app.use("/", require("./routers/reg"))
app.use("/", require("./routers/workouts"))

app.listen(PORT, () => {
    console.log(`App was launched on http://localhost:${PORT}`)
})


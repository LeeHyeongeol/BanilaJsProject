const dotenv = require("dotenv")
const fs = require('fs')
const http = require("http")
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const usersRouter = require("./routes/users")

const app = express()

app.use(cookieParser())
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "DELETE", "PATCH"],
})
)

app.use('/users', usersRouter);

const PORT = 4000;

app.listen(PORT, function () {
  console.log("server is connected!")
})

module.exports = app



const express = require("express")
const usersRouter = express.Router()
const { usersController } = require("../controller")

usersRouter.post("/signup", usersController.signup.post)
usersRouter.post("/signin", usersController.signin.post)
usersRouter.post("/signout", usersController.signout.post)

module.exports = usersRouter;
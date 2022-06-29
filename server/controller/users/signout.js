const { users } = require("../../models")
const { sign } = require("jsonwebtoken")
// const { dotenv } = require("dotenv")
require("dotenv").config()

module.exports = {
  post: async (req, res) => {
    try {
      res.cookie("accessToken", "", {
        sameSite: "none",
        domain: "localhost",
        path: "/",
        secure: true,
        httpOnly: true,
        maxAge: 0
      })
        .send({ message: "Successfully Logged Out!" })
    } catch (err) {
      console.log("err", err)
      res.status(500).send({ message: "Internal Server Error!" })
    }
  }
}
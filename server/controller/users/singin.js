const { User } = require("../../models")
const { sign } = require("jsonwebtoken")
const validationCheck = require("../../function/validation")
// const { dotenv } = require("dotenv")
require("dotenv").config()

//{
//  "username" : "umbappe",
//  "password" : "hhellohello"
//}

module.exports = {
  post: async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
      res.status(400).send({ message: "Please write username or password down" })
    } else if (!validationCheck(username) || !validationCheck(password)) {
      res.status(400).send({ message: "wrong validate information" })
    } else {
      try {
        const userInfo = await User.findAll({
          where: { username, password }
        })
        console.log('userInfo######', userInfo[0].dataValues)
        if (userInfo) {
          const accessToken = sign(
            userInfo[0].dataValues,
            process.env.ACCESS_SECRET,
            { expiresIn: 60 * 60 * 24 }
          )
          res.status(200)
            .cookie("accessToken", accessToken, {
              sameSite: "none",
              domain: "localhost",
              path: "/",
              secure: true,
              httpOnly: true,
              maxAge: 60 * 60 * 2
            })
            .send
            ({
              data: accessToken,
              message: "successfully signedIn!"
            })
        } else {
          res.status(400).send({ message: "Invalid Information" })
        }
      } catch (err) {
        console.log("에러", err)
        res.status(500).send({ message: "Internal Server Error!" })
      }
    }
  }
}

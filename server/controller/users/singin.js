const { users } = require("../../models")
const { sign } = require("jsonwebtoken")
// const { dotenv } = require("dotenv")
require("dotenv").config()


module.exports = {
  post: async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
      res.status(400).send({ message: "Please write username or password down" })
    } else {
      try {
        const userInfo = await users.findAll({
          where: { username }
        })
        if (userInfo) {
          const accessToken = sign(
            userInfo.dataValues,
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

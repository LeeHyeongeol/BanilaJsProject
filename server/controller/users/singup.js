const { User } = require("../../models")
const { sign } = require("jsonwebtoken")
const { validationCheck } = require("../../function/validation")
// const { dotenv } = require("dotenv")
require("dotenv").config()

//{
// "username" : "babo",
//"password" : "moki",
//"mobile" : "010-9876-5432"
//}

module.exports = {
  post: async (req, res) => {
    //입력한 아이디가 db에 있는 건지 확인
    const { username, password, mobile } = req.body
    if (!username || !password || !mobile) {
      res.status(404).send({ message: "please write full information down!" })
    } else if (!validationCheck(username) || !validationCheck(password)) {
      res.statsu(404).send({ message: "wrong validate information" })
    } else {
      try {
        const userInfoName = await User.findOne({
          where: { username }
        })
        const userInfoPassword = await User.findOne({
          where: { password }
        })
        const userInfoMobile = await User.findOne({
          where: { mobile }
        })
        if (userInfoName) {
          res.status(400).send({ message: "username already exists" })
        } else if (userInfoPassword) {
          res.status(400).send({ message: "password already exists" })
        } else if (userInfoMobile) {
          res.status(400).send({ message: "mobile already exists" })
        } else {
          const [userData, created] = await User.findOrCreate({
            where: {
              username,
              password,
              mobile
            }
          })
          const accessToken = sign(
            userData.dataValues,
            process.env.ACCESS_SECRET,
            { expiresIn: 60 * 60 * 24 }
          )
          res.status(201)
            .cookie("accessToken", accessToken, {
              sameSite: "none",
              domain: "localhost",
              path: "/",
              secure: true,
              httpOnly: true,
              maxAge: 1000 * 60 * 60 * 2
            })
            .send({
              message: "Successfully Signed up!"
            })
        }
      } catch (err) {
        console.log("err", err)
        res.status(500).send({ message: "Internal server Error!" })
      }

    }
  }
}
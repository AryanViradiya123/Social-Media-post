const USER = require("../models/user")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

exports.protect = async function (req, res, next) {
  try {
    let token = req.headers.authorization
    if (!token) {
      throw new Error("please send token")
    }
    // console.log(token);
    var decoded = jwt.verify(token, 'SURAT');

    let checkUSER = await USER.findById(decoded.id)
    if(!checkUSER){
      throw new Error("User not Found")
    }
    next()
  }
  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

}

exports.SignupUser = async function (req, res, next) {
  try {
    let formdata = req.body

    if (!formdata.username || !formdata.email || !formdata.password) {
      throw new Error('pleace enter valid fields')
    }
    formdata.password = await bcrypt.hash(formdata.password, 8)
    const data = await USER.create(formdata)

    res.status(201).json({
      message: "user signup successful",
      data: data
    })

  }
  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }


}

exports.LoginUserUser = async function (req, res, next) {
  try {
    let formdata = req.body

    if (!formdata.email || !formdata.password) {
      throw new Error('pleace enter valid fields')
    }

    const user = await USER.findOne({ email: formdata.email })

    if (!user) {
      throw new Error("email wrong")
    }
    let password = await bcrypt.compare(formdata.password, user.password)

    if (!password) {
      throw new Error("password wrong")
    }
    var token = jwt.sign({ id: user._id }, 'SURAT');
    res.status(200).json({
      message: "Login!",
      data: user,
      token
    })
  }
  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}
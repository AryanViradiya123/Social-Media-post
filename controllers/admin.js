const admin = require("../models/admin")
const bcrypt = require('bcrypt')

exports.SignupAdmin = async function(req, res, next) {
    try{
      let formdata = req.body
  
      if(!formdata.username || !formdata.email || !formdata.password){
        throw new Error('pleace enter valid fields')
      }
      formdata.password = await bcrypt.hash(formdata.password, 8)
      const data = await admin.create(formdata)
  
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

exports.loginAdmin = async function(req, res, next) {
    try{
      let formdata = req.body
  
      if(!formdata.email || !formdata.password){
        throw new Error('pleace enter valid fields')
      }
  
      const user = await admin.findOne({ email: formdata.email})
  
      if(!user){
        throw new Error("email wrong")
      }
      let password = await bcrypt.compare(formdata.password , user.password)
      
      if(!password){
        throw new Error("password wrong")
      }
  
      res.status(200).json({
        message: "Login!",
        data: user
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}
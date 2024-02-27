const alldata = require("../models/alldata")

exports.alldataCreate = async function (req, res, next) {
    try {
      const data = await alldata.create(req.body)
      
      res.status(201).json({  
        message: "alldata successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.alldataFind = async function (req, res, next) {
  try {
    const data = await alldata.find().populate(['userid' , 'adminid' , 'homeid'])

    res.status(200).json({
      status: "success",
      message: "alldata found successfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.alldataUpdate =  async function (req, res, next) { 
    try {
      await alldata.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "alldata update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.alldataDelete = async function (req, res, next) {
    try {
      const data = await alldata.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "alldata delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}


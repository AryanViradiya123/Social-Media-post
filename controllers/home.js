const home = require("../models/home")

exports.homeCreate = async function (req, res, next) {
    try {
        req.body.post = req.file.filename
        if (!req.body.home || !req.body.search || !req.body.post || !req.body.profile || !req.body.status) {
            throw new Error('pleace enter valid fields')
        }
        const data = await home.create(req.body)

        res.status(201).json({
            message: "user home page successful",
            data: data
        })
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

exports.homeFind = async function (req, res, next) {
    try {
        const data = await home.find()

        res.status(200).json({
            status: "success",
            message: "data found successfull",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }

}

exports.homeUpdate = async function (req, res, next) {
    try {
        await home.findByIdAndUpdate(req.query.id, req.body)

        res.status(201).json({
            status: "success",
            message: "home page update successfull"
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }

}

exports.homeDelete = async function (req, res, next) {
    try {
        const data = await home.findByIdAndDelete(req.query.id)

        res.status(200).json({
            status: "success",
            message: "home page delete successfull",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }

}


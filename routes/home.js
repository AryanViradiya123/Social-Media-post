var express = require('express');

var router = express.Router();
const homeController = require('../controllers/home')
const GetController = require('../controllers/home')
const UpdateController = require('../controllers/home')
const DeleteController = require('../controllers/home')
var multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage: storage })


router.post('/create', upload.single("post") , homeController.homeCreate);
router.get('/find', GetController.homeFind);
router.patch('/update', upload.single("post") , UpdateController.homeUpdate);
router.delete('/delete', DeleteController.homeDelete);

module.exports = router;
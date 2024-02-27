var express = require('express');

var router = express.Router();
const alldataController = require('../controllers/alldata')
const GetController = require('../controllers/alldata')
const UpdateController = require('../controllers/alldata')
const DeleteController = require('../controllers/alldata')


router.post('/create', alldataController.alldataCreate);
router.get('/find', GetController.alldataFind);
router.patch('/update', UpdateController.alldataUpdate);
router.delete('/delete', DeleteController.alldataDelete);
 
module.exports = router;    
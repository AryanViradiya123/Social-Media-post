var express = require('express');
var fs = require('fs');

var router = express.Router();
const bcrypt = require('bcrypt');
const multer = require('multer');

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


/* GET home page. */

// cat

// router.post('/cat/create', async function (req, res, next) {
//   try {
//     if (!req.body.colorname || !req.body.colorcode) {
//       throw new Error('pleace enter valid fields')
//     }
//     const data = await CAT.create(req.body)
//     res.status(201).json({
//       message: "user signup successful",
//       data: data
//     })
//   }
//   catch (error) {
//     res.status(404).json({
//       message: error.message
//     })
//   }
// });

// router.get('/CAT/find', 
// );

// router.patch('/CAT/update', );

// router.delete('/CAT/delete', );


// user

// router.post('/signup-user',);

// router.post('/login-user',);


// admin

// router.post('/signup-admin',);


// router.post('/login-admin',);


// product

// router.post('/product/create',);

// router.get('/product/find', );

// router.patch('/product/update',);

// router.delete('/product/delete', );

// add to cart
// router.post('/cart/create',);

// router.get('/cart/find', );

module.exports = router;
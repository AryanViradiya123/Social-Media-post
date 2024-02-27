var express = require('express');

var router = express.Router();
const SignupUserControllers = require('../controllers/user')
const LoginUserControllers = require('../controllers/user')

// cat

router.post('/signupUse', SignupUserControllers.SignupUser);
router.post('/loginUser', LoginUserControllers.LoginUserUser);

module.exports = router;
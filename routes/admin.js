var express = require('express');

var router = express.Router();
const SignupAdminControllers = require('../controllers/admin')
const LoginAdminControllers = require('../controllers/admin')

// cat

router.post('/signupAdmin', SignupAdminControllers.SignupAdmin);
router.post('/loginAdmin', LoginAdminControllers.loginAdmin);

module.exports = router;
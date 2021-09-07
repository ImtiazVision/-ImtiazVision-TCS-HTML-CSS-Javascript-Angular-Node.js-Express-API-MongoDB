// loading the module
let express = require('express');

let router = express.Router();

let userController = require('../controller/user.controller');


// change the path from root to sub directory '/signIn'
router.post('/signIn',userController.signIn);
router.post('/signUp',userController.signUp);

module.exports = router;
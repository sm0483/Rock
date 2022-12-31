const express=require('express');
const router=express.Router();
const result = require('../controller/Resut');


router.route('/start').post(result);


module.exports=router;
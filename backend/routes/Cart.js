const express=require('express');
const path=require('path');
const addCartController=require('../contollers/ClientCart')
const router=express.Router();
// router.post('/client/login',addClientController.getLogined);
router.post('/:client/:hotelid',addCartController.addToCart);
module.exports=router;
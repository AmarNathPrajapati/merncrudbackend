const express = require("express");
const router  = express.Router()
const User = require('../model/User');
//basically we will send data to the frontend.
router.get('/fetchuser',async(req,res)=>{
    try {
        //fetch data from database
        const user = await User.find();
        res.send({
            status:true,
            message:'successfull fetch all users.',
            UsersData   : user,
            result:{
                totalUsers : user.length,
            },
        })
    } catch (error) {
        res.status(500).json({
            "message":"Internal Server Error",
            'error' : err,
        })
    }
})
module.exports=router;
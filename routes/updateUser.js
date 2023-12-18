const express = require("express");
const router  = express.Router()
const User = require('../model/User');

//using the put request 
router.put('/updateuser',async(req,res)=>{
    try {
        const {id,...rest} = req.body;
        console.log(req.body);
        console.log(rest);
        const data = await User.updateOne({_id:id},rest)
        //returning a message to
        res.status(201).send({
            msg:'user updated successfully!',
            data:data,
            success:true
        })
    } catch (err) {
        res.status(500).json({
            "message":"Internal Server Error",
            'error' : err,
        })
    }
})

module.exports=router;
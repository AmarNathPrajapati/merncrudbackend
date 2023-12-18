const express = require("express");
const router  = express.Router()
const User = require('../model/User');
router.delete('/deleteuser/:id',async(req,res)=>{
    try {
        const id= req.params.id
        const data = await User.deleteOne({_id:id})
        res.status(200).send({
            message:"user deleted successfully",
            status : true,
            data:data
        })
    } catch (error) {
        res.status(500).json({
            "message":"Internal Server Error",
            'error' : err,
        })
    }

})
module.exports=router;
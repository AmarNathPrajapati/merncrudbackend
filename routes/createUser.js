const express = require("express");
const router  = express.Router()
const User = require('../model/User');

router.post('/createuser',
    async(req,res)=>{
        try {
            await User.create({
                name: req.body.name,
                email : req.body.email,
                phone: req.body.phone
            })
            res.send({'success':true})
        } catch (err) {
            res.status(500).json({
                "message":"User Not added",
                'error' : err,
            })
        }
    }
)
module.exports=router;
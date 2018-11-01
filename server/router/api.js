const express = require('express')
const router = express.Router()
const Task = require('../db/models/task')
const passport = require('../passport')



// this route is just used to get the user basic info
router.get('/task', passport.authenticate('local'),(req, res) => {
	if (req.user) {
        Task.find({ 'user': req.user} ,(_ , tasks)=>{
            return res.json({ tasks: tasks})
        })
	} else {
		return res.json({ user: null })
	}
})


router.post('/task',passport.authenticate('local'), (req, res) => {
    console.log("\ngo\n");
    
    console.log(req.body.loc);
    
	if (req.user) {
        req.user._id
        Task.create({user:req.user._id,  } , function (err, small) {
            if (err) return handleError(err);
            // saved!
            return res.json({ msg: 'added' })
          });
        
        
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})






module.exports = router
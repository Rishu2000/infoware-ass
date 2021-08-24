const express = require('express');
const signup = express();

signup.get('/',(req,res) => {
    res.json({
        Success: true,
        Message: 'Sign up module.'
    })
})
signup.post('/',(req,res) => {
    res.json({
        Success: true,
        Message: req.body
    })
})

module.exports = signup;
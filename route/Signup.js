const express = require('express');
const signup = express();
const {knex} = require('../pg/connection')

signup.get('/',(req,res) => {
    res.json({
        Success: true,
        Message: 'Sign up module.'
    })
})
signup.post('/',(req,res) => {
    const {username,email,password} = req.body;
    if(!email || !password || !username){
        req.session.destroy();
        res.status(400).json({
            Success:false,
            Message:"All the fields are required."
        });
    }else{
        knex('users')
        .where({email: email})
        .then((rows) => {
            if(rows.length > 0){
                req.session.destroy();
                res.status(406).json({
                    Success: false,
                    Message:"email already exist."
                })
            }else{
                knex('users')
                .insert({name:username, password:password, email:email})
                .then(() => {
                    req.session.Authentication = req.body;
                    res.status(201).json({
                        Success: true,
                        Message:username
                    });
                    // console.log(req.session);
                })
            }
        })
    }
})

module.exports = signup;
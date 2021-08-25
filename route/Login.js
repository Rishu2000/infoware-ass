const express = require('express');
const login = express();
const signup = require('./Signup');
const {knex} = require('../pg/connection')

login.use((req,res,next) => {
    const {Authentication} = req.session;
    if(Authentication || (req.path === '/' && req.method === 'POST') || (req.path === '/signup' && req.method === 'POST')){
        next();
    }else{
        res.status(403).json({
            Success: false,
            Message: 'Authentication required.'
        })
    }
})

login.use('/signup',signup);
login.get('/', (req, res) => {
    res.json('login module.')
})
login.post('/', async (req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        req.session.destroy();
        res.status(400).json({
            Success:false,
            Message:"Please enter both email and password"
        });
    }else{
        await knex('users')
        .where({email: email})
        .then((rows) => {
            if(rows.length > 0){
                if(rows[0].password === password){
                    req.session.Authentication = rows[0];
                    res.json({
                        Success:true,
                        Message:rows[0].name,
                        Admin:rows[0].admin
                    });
                }else{
                    req.session.destroy();
                    res.status(401).json({
                        Success:false,
                        Message:"Incorrect password."
                    });
                }
            }else{
                req.session.destroy();
                res.status(404).json({
                    Success:false,
                    Message:"Please, signup if you are a new user."
                });
            }
        })
    }
})

module.exports = login;
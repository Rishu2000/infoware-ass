const express = require('express');
const login = express();

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

login.get('/', (req, res) => {
    res.json('login module.')
})

login.post('/',(req,res) => {
    res.json(req.body);
})

module.exports = login;
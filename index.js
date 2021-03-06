const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const port = 5000;
const login = require('./route/Login');

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'infoware-ass',
    resave: false,
    saveUninitialized: false
}))
app.use('/login',login);
app.get('/', (req, res) => {
    res.json('You are in root folder.');
})

app.listen(port,() => {
    console.log('server started on port ' + port);
})
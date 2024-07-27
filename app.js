require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const routes = require('./routes/router');
// const api = require('./routes/api');

require('custom-env').env(process.env.NODE_ENV, './config');
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.DB_URI;

const db= mongoose.connect(DB_URI, 
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });
console.log(db);

const server = express();

server.use(express.static('public'))
// server.use(cors());
server.use(bodyParser.urlencoded({extended : true}));
server.use(express.json());
server.set('view engine','ejs');
server.use(session({
    secret: 'myaoo',    
    saveUninitialized: false,
    resave: false
}))

server.use("/", require("./routes/router"));
// app.use('/api', api);
// server.use('', routes);

server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
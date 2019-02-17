const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoutes = require('./routes/book');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next) => {
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PATCH, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
next();
});

app.use(adminRoutes);

app.listen(4000,()=>console.log('Express server running'));

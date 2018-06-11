const controller = require('./controller')
const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())

console.log(process.env.CONNECTION_STRING)

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db);
}).catch(e => {
    console.log(e)
})

app.listen(3005, () => {
    console.log("working on 3005");
})
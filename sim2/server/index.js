const controller = require('./controller')
const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
//properties
//houseruser

//many references the one. properties references the user_id



const app = express();
////top level middleware
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db);
}).catch(e => {
    console.log(e)
})

// app.use((req, res, next){
//     req.session.user = {
//         name: 'tommy',
//         age: 24
//     };
//     next()
// })

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
    // cookie: {
    //     maxAge: 1000 * 60
    // }
}))

app.post('/api/auth/login', controller.login)
app.get('/api/getproperties', controller.getProperties)


// app.get('/getProperties', controller.getProperties)

app.listen(3005, () => {
    console.log("working on 3005");
})
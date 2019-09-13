const express = require('express');
const app = express();
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
const {PORT_SERVER, CONNECTION_STRING, SESSION_SECRET} = process.env;

massive(CONNECTION_STRING).then(dbInst => {
    app.set('db', dbInst);
    console.log("Connected to database.");
})

app.use(express.json());

app.listen(PORT_SERVER, () => console.log("Listening dude"))
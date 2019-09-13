require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const {PORT_SERVER, CONNECTION_STRING, SESSION_SECRET} = process.env;
const {getHouses} = require('./controller');

app.use(express.json());

massive(CONNECTION_STRING).then(dbInst => {
    app.set('db', dbInst);
    console.log("Connected to database.");
})


app.get('/api/houses', getHouses);

app.listen(PORT_SERVER, () => console.log("Listening dude"))
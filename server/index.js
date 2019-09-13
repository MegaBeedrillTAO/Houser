require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const {getHouse, addHouse,deleteHouse} = require('./controller');

app.use(express.json());

massive(CONNECTION_STRING).then(dbInst => {
    app.set('db', dbInst);
    console.log("Connected to database.");
})


app.get('/api/houses', getHouse);
app.post('/api/houses', addHouse);
app.delete('/api/houses/:id', deleteHouse);

app.listen(SERVER_PORT, () => {console.log(`Listening on ${SERVER_PORT}` )})
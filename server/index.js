const { application } = require('express');
const express = require('express');
const app = express();
const connect = require('./configs/db.js');

app.use(express.json());

const port = 8080;
connect();
app.listen(port, () => {
    console.log(`server listening on ${port}`);
})

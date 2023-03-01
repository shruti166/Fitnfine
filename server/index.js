const express = require('express');
const app = express();
const connect = require('./configs/db.js');
const exerciseRouter = require('./routes/exerciseRouter.js');

app.use(express.json());

app.use("/exercise", exerciseRouter);

const port = 8080;
connect();
app.listen(port, () => {
    console.log(`server listening on ${port}`);
})

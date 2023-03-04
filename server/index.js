const express = require("express");
const app = express();
const connect = require("./configs/db.js");
const logger = require("./middlewear/logger.js");
const color = require("colors");
const exerciseRouter = require("./routes/exerciseRouter.js");
const postRouter = require("./routes/postRouter.js");
const errorHandler = require('./middlewear/error');
const fileupload = require('express-fileupload');
const userRouter = require("./routes/userRouter.js");

app.use(express.json());

app.use(logger);
app.use(fileupload());
app.use("/exercise", exerciseRouter);
app.use("/posts", postRouter);
app.use("/users", userRouter)
app.use(errorHandler);

const port = 8080;
connect();
app.listen(port, () => {
  console.log(`server listening on ${port}`.yellow.bold);
});

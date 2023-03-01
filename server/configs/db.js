const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connection is successfull");
    })
    .catch((e) => {
      console.log("no connection");
    });
};
module.exports = connect;

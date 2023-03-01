const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connection is successfull".blue.bold);
    })
    .catch((e) => {
      console.log("no connection".red.bold);
    });
};
module.exports = connect;

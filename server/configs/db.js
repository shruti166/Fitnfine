const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://shruti166:shruti166@cluster0.q022tkn.mongodb.net/myfitnesstracker?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("connection is successfull");
    })
    .catch((e) => {
      console.log("no connection");
    });
};
module.exports = connect;

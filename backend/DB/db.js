const mongoose = require("mongoose");
const connect = async () => {
  try {
    const connectDB = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Db connected successfully");
  } catch (error) {
    console.log("Error connecting db", error);
  }
};

module.exports = connect;

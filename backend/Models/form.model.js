const mongoose = require("mongoose");
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  companyName: String,
  message: String,
  file: {
    type: Buffer,
    contentType: String,
  },
});

const form = mongoose.model("Form", FormSchema);

module.exports = form;

const sendEmail = require("../lib/mails");
const form = require("../Models/form.model");

const SendForm = async (req, res) => {
  const { name, email, companyName, number, message } = req.body;
  const file = req.file;

  try {
    const newForm = new form({
      name,
      email,
      number,
      message,
      companyName,
      file: file.buffer,
      contentType: file.mimetype,
    });

    await newForm.save();

    await newForm.save();

    await sendEmail({ name, email, companyName, message, number }, file);
    return res
      .status(200)
      .json({ success: true, message: "Form Submitted successfully", newForm });
  } catch (error) {
    console.log("Error occurred", error);
    return res
      .status(500)
      .json({ success: false, message: "Error in sendform controller" });
  }
};

module.exports = { SendForm };

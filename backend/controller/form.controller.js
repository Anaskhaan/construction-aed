const sendEmail = require("../lib/mails");
const form = require("../Models/form.model");
const { uploadToDropbox } = require("../lib/multerConfig"); // Named import

const SendForm = async (req, res) => {
  const { name, email, companyName, number, message } = req.body;
  const file = req.file;

  if (!file.mimetype.includes("pdf")) {
    return res
      .status(400)
      .json({ success: false, message: "Only PDF files are allowed!" });
  }

  try {
    // Upload file to Dropbox
    const fileUrl = await uploadToDropbox(file);

    const newForm = new form({
      name,
      email,
      number,
      message,
      companyName,
      file: fileUrl,
      contentType: file.mimetype,
    });

    await newForm.save();

    await sendEmail({ name, email, companyName, message, number }, fileUrl);

    return res
      .status(200)
      .json({ success: true, message: "Form submitted successfully", newForm });
  } catch (error) {
    console.log("Error occurred", error);
    return res
      .status(500)
      .json({ success: false, message: "Error in sendform controller", error });
  }
};

module.exports = { SendForm };

const sendEmail = require("../lib/mails");
const form = require("../Models/form.model");
const cloudinary = require("cloudinary").v2;

const SendForm = async (req, res) => {
  const { name, email, companyName, number, message } = req.body;
  const file = req.file;
  console.log("Cloudinary Config:", cloudinary.config());

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "uploads",
      resource_type: "raw",
      type: "upload",
    });
    console.log("Cloudinary Upload Result:", result);
    if (!file.mimetype.includes("pdf")) {
      return res
        .status(400)
        .json({ success: false, message: "Only PDF files are allowed!" });
    }

    const newForm = new form({
      name,
      email,
      number,
      message,
      companyName,
      file: result.secure_url,
      contentType: file.mimetype,
    });

    await newForm.save();

    await sendEmail(
      { name, email, companyName, message, number },
      result.secure_url
    );
    return res
      .status(200)
      .json({ success: true, message: "Form Submitted successfully", newForm });
  } catch (error) {
    console.log("Error occurred", error);
    return res
      .status(500)
      .json({ success: false, message: "Error in sendform controller", error });
  }
};

module.exports = { SendForm };

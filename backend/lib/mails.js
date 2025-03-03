
const nodemailer = require("nodemailer");

const sendEmail = async (formData, fileUrl) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: "mashhoodbutt47@gmail.com",
    subject: "New Form Submission",
    html: `<p><strong>Name:</strong> ${formData.name}</p>
           <p><strong>Email:</strong> ${formData.email}</p>
           <p><strong>Message:</strong> ${formData.message}</p>
           <p><strong>Company Name:</strong> ${formData.companyName}</p>
           <p><strong>Phone Number:</strong> ${formData.number}</p>
           <p><strong>File:</strong> <a href="${fileUrl}" target="_blank">View File</a></p>`, // Cloudinary file link
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;

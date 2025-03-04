require("dotenv").config();
const multer = require("multer");
const { Dropbox } = require("dropbox");
const fs = require("fs");
const path = require("path");

// Configure Dropbox
const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer for temporary file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Temporary folder before uploading to Dropbox
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const maxSize = 100 * 1024 * 1024; // 100MB

const upload = multer({ storage, limits: { fileSize: maxSize } });

// Dropbox upload function
const uploadToDropbox = async (file) => {
  const fileContent = fs.readFileSync(file.path);
  const dropboxPath = `/${file.filename}`; // Uploads directly inside 'Swift Takeoffs' folder

  try {
    // Upload file to Dropbox
    const response = await dbx.filesUpload({
      path: dropboxPath,
      contents: fileContent,
    });

    // Generate shared link
    const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({
      path: dropboxPath, // Corrected this line
    });

    fs.unlinkSync(file.path); // Delete local file after uploading

    // Modify the link to force direct download
    return sharedLink.result.url.replace("?dl=0", "?raw=1");
  } catch (error) {
    console.error("Dropbox upload error:", error);
    throw new Error("Failed to upload to Dropbox");
  }
};

// Export both `upload` and `uploadToDropbox`
module.exports = { upload, uploadToDropbox };

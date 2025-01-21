const multer = require("multer");

const storage = multer.memoryStorage();
const filteFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({
  storage: storage,
  filteFilter: filteFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

module.exports = upload;

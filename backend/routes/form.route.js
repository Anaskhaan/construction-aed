const express = require("express");

const { SendForm } = require("../controller/form.controller");
const upload = require("../lib/multerConfig");
const router = express.Router();
router.post("/sendform", upload.single("file"), SendForm);

module.exports = router;

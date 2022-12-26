const express = require("express");
const router = express.Router();
const {getMessages,postMessage} = require("../controller/messages")

router.route("/").get(getMessages).post(postMessage)

module.exports = router;
const express = require("express");
const router = express.Router();
const {getMessages,postMessage,deleteMessages} = require("../controller/messages")

router.route("/").get(getMessages).post(postMessage).purge(deleteMessages)

module.exports = router;
var express = require("express");
var router = express.Router();

var twitterController = require("../controller/twitterController");

router.get('/',twitterController.firstPage)
router.post('/getFeed',twitterController.getFeed)

module.exports = router;
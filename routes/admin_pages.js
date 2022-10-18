var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.send("Admin Zone")
})

//Exports
module.exports = router;
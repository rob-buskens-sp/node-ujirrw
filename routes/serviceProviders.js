var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET serviceProvider */
router.get('/', function (req, res, next) {
  fs.readFile(`./resources/serviceProviderResponse.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    res.send(data)
  })
});



module.exports = router;

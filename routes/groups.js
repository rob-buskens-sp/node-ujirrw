var express = require('express');
var router = express.Router();
var groupService = require('../services/group.service');

/* GET groups listing. */
router.get('/', function(req, res, next) {
  res.json(groupService.getGroups(req.query));
});

router.get('/:id', function(req, res, next) {
  let retVal = groupService.getGroup(req.params.id); 

  if (retVal) {
    res.json(retVal);
  } else {
    res.status(404);
    res.send(`{"status":404, "message": "${req.params.id} not found"}`)
  }
});

module.exports = router;
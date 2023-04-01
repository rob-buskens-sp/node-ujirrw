var express = require('express');
var router = express.Router();
var resourceTypesService = require('../services/resourceTypes.service');

/* GET ResourceTypes listing. */
router.get('/', function(req, res, next) {
  res.json(resourceTypesService.getResourceTypes(req.query));
});

router.get('/:id', function(req, res, next) {
  res.json(resourceTypesService.getResourceType(req.params.id));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var schemaService = require('../services/schema.service');
const logger = require('../utils/logger');

/* GET schemas listing. */
router.get('/', function(req, res, next) {
  logger.debug('>GET /Schemas');
  var schemas = schemaService.getSchemas();

  logger.debug('<GET /Schemas');

  res.json(schemas);
});

router.get('/:id', function(req, res, next) {
  logger.debug('>GET /Schemas');

  logger.debug('<GET /Schemas');

  res.json(schemaService.getSchema(req.params.id));
});

module.exports = router;

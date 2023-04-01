var express = require('express');
var router = express.Router();
var userService = require('../services/user.service');
const logger = require('../utils/logger');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(userService.getUsers(req.query));
});

router.get('/:id', function(req, res, next) {
  res.json(userService.getUser(req.params.id));
});

router.post('/', function(req, res, next) {
  logger.debug('>Post /User: ' + JSON.stringify(req.body));
  logger.debug(req.json);
  var newUser = userService.createUser(req.body);

  logger.debug('<Post /User: ' + JSON.stringify(newUser));

  res.status(201).send(newUser);
});

router.put('/:id', function(req, res, next) {
  logger.debug('>PUT /User: ' + JSON.stringify(req.body));

  res.status(200).send(userService.updateUser(req.params.id, req.body));
});

router.patch('/', function(req, res, next) {
  res.json(userService.patchUser(JSON.parse(req.body)));
});

router.delete('/:id', function(req, res, next) {
  res.json(userService.deleteUser(req.params.id));
})

module.exports = router;

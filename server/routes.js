const router = require('express').Router();
const controller = require('./controllers');

// router.get('/users', controller.users.get);
router.get('/foods', controller.foods.get);

module.exports = router;
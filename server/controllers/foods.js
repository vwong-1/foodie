const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.foods.get(req.query.item, (err, results) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).send(results.rows);
      }
    });
  },
  // post: ,
  // delete: ,
};

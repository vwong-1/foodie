const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.ratings.get(req.query.id, (err, results) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).send(results.rows);
      }
    });
  },
  // post: (req, res) => {
  //   models.ratings.post(##rating##, (err, results) => {
  //     if (err) {
  //       res.sendStatus(400);
  //     } else {
  //       res.status(200).send(results.rows);
  //     }
  //   });
  // },
  // delete: ,
};

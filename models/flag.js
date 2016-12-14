const db = require('../db/config');

module.exports = {
  createFlag(req, res, next) {
    db.oneOrNone(`INSERT INTO flags (flag_name, place_id, user_id) VALUES ('${req.body.flagName}', '${req.body.placeID}', '${res.user.userID}') returning *`)
    .then((rows) => {
      res.rows = rows;
      next();
    })
    .catch(error => next(error));
  },
  getFlags(req, res, next) {
    db.any(`SELECT * FROM flags`)
    .then((rows) =>{
      res.rows = rows;
      next();
    })
    .catch(error => next(error));
  },
};

const db = require('../db/config');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/", salt);

module.exports = {
  encrypt(req, res, next) {
    const salt = bcrypt.genSaltSync(10);
    res.pass = bcrypt.hashSync(req.body.password, salt);
    next();
  },
  createUser(req, res, next) {
    console.log('create user');
    db.oneOrNone(`INSERT INTO users (user_name, password) VALUES ('${req.body.username}', '${res.pass}') returning id, user_name`)
    .then((rows) => {
      res.rows = rows;
      next();
    })
    .catch(error => next(error));
  }
}

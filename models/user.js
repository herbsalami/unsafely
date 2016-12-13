const db = require('../db/config');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  encrypt(req, res, next) {
    const salt = bcrypt.genSaltSync(10);
    res.pass = bcrypt.hashSync(req.body.password, salt);
    next();
  },
  createUser(req, res, next) {
    db.oneOrNone(`INSERT INTO users (user_name, password) VALUES ('${req.body.username}', '${res.pass}') returning id, user_name`)
    .then((rows) => {
      res.rows = {
        userID: rows.id,
        username: rows.user_name,
      };
      next();
    })
    .catch(error => next(error));
  },
  loginUser(req, res, next) {
    db.oneOrNone(`SELECT * FROM users WHERE user_name = '${req.params.userID}'`)
    .then((rows) => {
      if(rows && bcrypt.compareSync(req.query.password, rows.password)) {
        res.rows = {
          userID: rows.id,
          username: rows.user_name,
        };
        next();
      }
      else {
        console.log('Wrong Username or Password');
        next();
      }
    })
    .catch(error => next(error));
  },
}

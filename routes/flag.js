const flag = require('express').Router();
const model = require('../models/flag');
const auth = require('../models/auth');

const sendTokenJSON = (req, res) => res.json(res.token);

flag.route('/')
  .post(auth.authenticate, model.createFlag, (req, res) => res.json(res.rows));

flag.route('/:userID')
  .get(auth.authenticate, model.getFlags, (req, res) => res.json(res.rows));
  // .get(model.encrypt, model.createUser, auth.createToken, sendTokenJSON);

// flag.route('/:userID')
//   .get(model.loginUser, auth.createToken, sendTokenJSON);

module.exports = flag;

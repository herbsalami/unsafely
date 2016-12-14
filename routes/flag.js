const flag = require('express').Router();
const model = require('../models/flag');
const auth = require('../models/auth');

const sendTokenJSON = (req, res) => res.json({token: res.token, flags: res.rows});

flag.route('/')
  .post(auth.authenticate, model.createFlag, auth.renewToken, sendTokenJSON);

flag.route('/:placeID')
  .get(auth.authenticate, model.getFlags, auth.renewToken, sendTokenJSON);
  // .get(model.encrypt, model.createUser, auth.createToken, sendTokenJSON);

// flag.route('/:userID')
//   .get(model.loginUser, auth.createToken, sendTokenJSON);

module.exports = flag;

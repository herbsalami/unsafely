const user = require('express').Router();
const model = require('../models/user');
const auth = require('../models/auth');

const sendTokenJSON = (req, res) => res.json({token: res.token, username: res.rows.username});

user.route('/')
  .post(model.encrypt, model.createUser, auth.createToken, sendTokenJSON);

user.route('/:userID')
  .get(model.loginUser, auth.createToken, sendTokenJSON);

module.exports = user;

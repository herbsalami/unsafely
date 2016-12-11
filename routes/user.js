const user = require('express').Router();
const model = require('../models/user');
const auth = require('../models/auth');

const sendTokenJSON = (req, res) => res.json(res.token);

user.route('/')
  .post(model.encrypt, model.createUser, auth.createToken, sendTokenJSON)

module.exports = user;

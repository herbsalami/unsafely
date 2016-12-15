const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = obj => jwt.sign(obj, process.env.SECRET);


const createToken = (req, res, next) => {
  res.token = token(res.rows);
  // try {
  //   console.log(jwt.verify(res.token, 'hello'));
  // }
  // catch (err){
  //   console.log('err');
  // }
  next();
}

const renewToken = (req, res, next) => {
  res.token = token(res.user);
  next();
}

const authenticate = (req, res, next) => {
  console.log(req.body, 'HI!');
  const tokenData = req.query.token ? req.query.token : req.body.token;
  try {
    res.user = jwt.verify(tokenData, process.env.SECRET);
    console.log(res.user)
  }
  catch (err) {
    console.log('err');
  }
  next();
}

module.exports = {
  createToken,
  authenticate,
  renewToken,
}

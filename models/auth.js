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

const authenticate = (req, res, next) => {
  const tokenData = req.query.token || req.body.token;
  try {
    res.user = jwt.verify(tokenData, process.env.SECRET)
  }
  catch (err) {
    console.log('err');
  }
  next();
}

module.exports = {
  createToken,
  authenticate,
}

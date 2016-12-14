const maps = require('express').Router();
const auth = require('../models/auth');
const fetch = require('node-fetch');
const sendTokenJSON = (req, res) => res.json({token: res.token, place: res.place});

const fetchPlace = (req, res, next) => {
  fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.params.placeID}&key=${process.env.PLACES_KEY}`)
  .then((r) => {
    console.log('good');
    return r.json();
  })
  .then((data) => {
    res.place = data;
    next();
  })
  .catch(err => console.log('bad'));
}

maps.route('/:placeID')
  .get(auth.authenticate, fetchPlace, auth.renewToken, sendTokenJSON);

module.exports = maps;

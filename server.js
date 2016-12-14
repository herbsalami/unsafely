require('dotenv').config({silent: true});
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user')
const flagRoute = require('./routes/flag')
const placeRoute = require('./services/googleMaps');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use('/user', userRoute);
app.use('/place', placeRoute);
app.use('/flag', flagRoute);

const history = require('connect-history-api-fallback');
app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log('Server is listening on', PORT));


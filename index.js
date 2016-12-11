require('dotenv').config({silent: true});
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user')
const placeRoute = require('./routes/place')
const flagRoute = require('./routes/flag')

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use('/user', userRoute);
// app.use('/place', placeRoute);
// app.use('/flag', flagRoute);

app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, () => console.log('Server is listening on', PORT));

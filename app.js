const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const indexRouter = require('./routes/index');
const appsRouter = require('./routes/apps');
const storesRouter = require('./routes/stores');

const env = process.env.NODE_ENV || 'development';

const app = express();
const PORT = 3001;

app.use(
  session({
    secret: '@taptap',
    resave: false,
    saveUninitialized: true
  })
);

app.use(
  cors({
    origin: [
      `http://localhost:${PORT}`,
      'http://localhost:3000',
      'http://taptap-client.s3-website-ap-northeast-1.amazonaws.com',
      'http://floyd12.mooo.com'
    ],
    methods: ['GET', 'POST'],
    credentials: true
  })
);

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (env === 'development') {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/apps', appsRouter);
app.use('/stores', storesRouter);

app.set('port', PORT);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;

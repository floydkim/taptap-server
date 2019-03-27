const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(cors({
  origin:['http://localhost:3000'],
  methods:['GET','POST'],
  credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.set('port', PORT);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

module.exports = app;

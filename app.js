var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
var mongodb = require('./mongo-test');

dotenv.config({path: __dirname + './process.env'});

var indexRouter = require('./routes/index');
var userspharmRouter = require('./routes/users-pharm');
var usershospitalRouter = require('./routes/users-hospital');
var pharmacyApi = require('./routes/pharmacy-api');
var hospitalApi = require('./routes/hospital-api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users_hosp', usershospitalRouter);
app.use('/users_pharm', userspharmRouter);
app.use('/apiv1/hospital', hospitalApi);
app.use('/api/v1/pharmacy', pharmacyApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to the port: ${PORT}`);
  process.on('uncaughtException', (data) => {
    try{
      return data;
    }catch(err) {
      if (err) throw err;
    };
  });
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');

var indexRouter = require('./routes/index');
var empleadosRouter = require('./routes/empleados');
var proyectosRouter = require('./routes/proyectos');
var imagesRouter = require('./routes/imagenes');

var app = express();
require('./lib/passport');

//definir url para peticiones cruzadas
app.use(cors({
    "origin": "*",
    "methods": "GET, POST, PUT, DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Rutas
app.use('/', indexRouter);
app.use('/empleados', empleadosRouter);
app.use('/proyectos', proyectosRouter);
app.use('/imagenes', imagesRouter);

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

module.exports = app;
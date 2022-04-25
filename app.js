const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const loginRouter = require('./src/routes/loginRouter');
const perfilRouter = require('./src/routes/perfilRouter');
const cadastroRouter = require('./src/routes/cadastroRouter');
const feedRouter = require('./src/routes/feedRouter');
const doandoRouter = require('./src/routes/doandoRouter')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));
app.use(session({
  secret:'6FAPGgszInSVc4Z+jKL1/7PfAHCbnTxUlDmySEQWNTY=',
  resave: true,
  saveUninitialized: true
}))

app.use('/',indexRouter);
app.use('/login',loginRouter);
app.use('/perfil', perfilRouter);
app.use('/cadastro', cadastroRouter);
app.use('/feed', feedRouter);
app.use('/doando',doandoRouter);


// catch 404 and forward to error handler
app.use((req, res, next) =>{
  return res.status(404).render('not-found404');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(error.status || 500);
  res.render('error');
});

module.exports = app;
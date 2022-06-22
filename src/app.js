const express = require('express');
const path = require('path');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/loginRouter');
const perfilRouter = require('./routes/perfilRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const feedRouter = require('./routes/feedRouter');
const doandoRouter = require('./routes/doandoRouter');
const anuncioRouter = require('./routes/anuncioRouter');
const animalDivulgadoRouter = require('./routes/animalDivulgadoRouter')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(methodOverride('_method'))
app.use(session({
  secret: '6FAPGgszInSVc4Z+jKL1/7PfAHCbnTxUlDmySEQWNTY=',
  resave: true,
  saveUninitialized: true
}))

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/perfil', perfilRouter);
app.use('/cadastro', cadastroRouter);
app.use('/feed', feedRouter);
app.use('/doando', doandoRouter);
app.use('/anuncio', anuncioRouter);
app.use('/animalDivulgado', animalDivulgadoRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  return res.status(404).render('not-found404');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(error)
  res.status(error.status || 500);
  res.render('error');
});

module.exports = app;
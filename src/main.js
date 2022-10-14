import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import api from './api';
dotenv.config();

const { PORT, MONGO_URI } = process.env;
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connect to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

const app = express();
app.set('port', PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.use('/api', api);

app.use('/', express.static(path.join(__dirname, 'public')));

const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
})
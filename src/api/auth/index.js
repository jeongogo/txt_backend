import express from 'express';
import * as authCtrl from './auth.ctrl';

const auth = express.Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);

export default auth;
import express from 'express';
import * as reservationCtrl from './reservation.ctrl';
import jwtVerify from '../../lib/jwtVerify';

const auth = express.Router();

auth.get('/list/:id', /* jwtVerify ,*/ reservationCtrl.list);
auth.post('/write', /* jwtVerify ,*/ reservationCtrl.write);

export default auth;
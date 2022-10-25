import express from 'express';
import * as reservationCtrl from './reservation.ctrl';
import jwtVerify from '../../lib/jwtVerify';

const reservation = express.Router();

reservation.get('/list/:id', /* jwtVerify ,*/ reservationCtrl.list);
reservation.post('/write', /* jwtVerify ,*/ reservationCtrl.write);

export default reservation;
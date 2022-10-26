import express from 'express';
import * as recordCtrl from './record.ctrl';
import jwtVerify from '../../lib/jwtVerify';

const record = express.Router();

record.get('/:id', /* jwtVerify ,*/ recordCtrl.list);
record.post('/:id', recordCtrl.writeRecord);
// record.get('/detail/:id', /* jwtVerify ,*/ recordCtrl.detail);

export default record;
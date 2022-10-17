import express from 'express';
import * as adminCtrl from './admin.ctrl';

const admin = express.Router();

admin.get('/users', adminCtrl.getUsers);
admin.get('/reservation', adminCtrl.getRerservation);
admin.post('/record/:id', adminCtrl.writeRecord);

export default admin;
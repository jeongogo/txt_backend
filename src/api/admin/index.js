import express from 'express';
import * as adminCtrl from './admin.ctrl';

const admin = express.Router();

admin.get('/users', adminCtrl.getUsers);

export default admin;
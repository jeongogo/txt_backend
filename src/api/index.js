import express from 'express';
import admin from './admin';
import auth from './auth';
import reservation from './reservation';

const router = express.Router();

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/reservation', reservation);

export default router;
import express from 'express';
import course from './course-router.js';
//import user from './user-router.js';
//import progress from './progress-router.js';

const router = express.Router();

router.use('/course', course);
//router.use('/user', user);
//router.use('/progres', progress);

export default router;
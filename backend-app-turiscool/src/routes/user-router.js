import { Router } from 'express';
import { obtainUsers, obtainUserById } from '../controllers/user-controller.js';

const router = Router();
// Rutas para los Usarios

router.get('/all', obtainUsers);
router.get('/:id', obtainUserById);

export default router;
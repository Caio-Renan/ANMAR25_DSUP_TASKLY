import { Router } from 'express';

const router = Router();

router.get('/tasks');
router.post('/tasks');

router.get('/tasks/status/:status');

router.get('/tasks/:id');

router.put('/tasks/:id');

router.delete('/tasks/:id');

export default router;
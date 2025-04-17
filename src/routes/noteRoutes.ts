import { Router } from 'express';

const router = Router();

router.get('/tasks/:taskId/notes');
router.post('/tasks/:taskId/notes');

router.get('/notes/:id');

router.put('/notes/:id')

router.delete('/notes/:id');

export default router;
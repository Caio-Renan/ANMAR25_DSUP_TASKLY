import { Router } from 'express';

const router = Router();

router.get('/tasks/:taskId/notes', (req, res) => {
    res.send('');
});
router.post('/tasks/:taskId/notes', (req, res) => {
    res.send('');
});

router.get('/notes/:id', (req, res) => {
    res.send('');
});

router.put('/notes/:id', (req, res) => {
    res.send('');
});

router.delete('/notes/:id', (req, res) => {
    res.send('');
});

export default router;
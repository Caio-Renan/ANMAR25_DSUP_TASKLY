import { Router } from 'express';

const router = Router();

router.get('/tasks', (req, res) => {
    res.send('');
});
router.post('/tasks', (req, res) => {
    res.send('');
});

router.get('/tasks/status/:status', (req, res) => {
    res.send('');
});

router.get('/tasks/:id', (req, res) => {
    res.send('');
});

router.put('/tasks/:id', (req, res) => {
    res.send('');
});

router.delete('/tasks/:id', (req, res) => {
    res.send('');
});

export default router;
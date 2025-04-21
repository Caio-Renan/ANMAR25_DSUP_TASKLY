import { Router } from 'express';
import CustomError from '../utils/CustomError.js';

const router = Router();

router.get('/categories', (req, res, next) => {
    try {
        throw new Error('Generic Error');
    } catch (error) {
        next(error);
    }
});

router.post('/categories', (req, res, next) => {
    try {
        const errors = ['Category name is required'];
        throw new CustomError(400, errors);
    } catch (error) {
        next(error);
    }
});

router.get('/categories/:id', (req, res) => {
    res.send('');
});

router.put('/categories/:id', (req, res) => {
    res.send('');
});

router.delete('/categories/:id', (req, res) => {
    res.send('');
});

export default router;
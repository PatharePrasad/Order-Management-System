import express from 'express';
import { login } from '../controllers/authController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/login', [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required')
], login);

export default router;
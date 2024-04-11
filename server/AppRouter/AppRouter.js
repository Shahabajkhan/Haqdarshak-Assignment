// userRouter.js

import express from 'express';
import { createUser } from '../Controller/userController.js';

const router = express.Router();

router.get('/user/signup', createUser);

export default router;

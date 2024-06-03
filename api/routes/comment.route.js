import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment, getPostComments } from '../controlers/comment.controler.js';

const router = express.Router();

router.post('/create',verifyToken, createComment);
router.get('/getPostComments/:postId',getPostComments);

export default router;
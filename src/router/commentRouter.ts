import express from 'express';
import { CommentController } from '../controller/CommentController';
import { CommentBusiness } from '../business/CommentBusiness';
import { CommentDatabase } from '../database/CommentDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { TokenManager } from '../services/TokenManager';

export const commentRouter = express.Router();

const commentController = new CommentController(
    new CommentBusiness(
        new CommentDatabase(),
        new IdGenerator(),
        new TokenManager(),
        new HashManager()
    )
);

// commentRouter.post("/signup", commentController.signup);
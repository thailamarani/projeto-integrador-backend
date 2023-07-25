import express from 'express';
import { PostController } from '../controller/PostController';
import { PostBusiness } from '../business/PostBusiness';
import { PostDatabase } from '../database/PostDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { TokenManager } from '../services/TokenManager';

export const postRouter = express.Router();

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new TokenManager(),
        new HashManager()
    )
);

postRouter.post("/", postController.createPost);
postRouter.get("/", postController.getPosts);
postRouter.get("/:id", postController.getPostById);
postRouter.put("/:id/vote", postController.votePost);
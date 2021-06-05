import express from "express";
import { getPosts, createPosts, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.put('/:id', updatePost);

export default router;

//http://localhost:5000/posts

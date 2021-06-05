import express from "express";
import { getPosts, createPosts, updatePost, deletePost,likePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.put('/:id', updatePost);
router.delete('/:id',deletePost);
router.put('/:id/likePost',likePost)

export default router;

//http://localhost:5000/posts

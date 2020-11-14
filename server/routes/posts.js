import express from 'express'
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router()

// All exectution of the functions will be done in controllers so it helps us keep this routing structure clean
router.get('/', getPosts)
router.post('/', createPost)

export default router

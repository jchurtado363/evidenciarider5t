import express from 'express'
import { getAllBlogs, getblog,createBlog,deleteBlog,updateBlog } from '../controllers/BlogController.js';
const router = express.Router()


router.get('/', getAllBlogs)
router.get('/:id', getblog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id',deleteBlog)

export default router;
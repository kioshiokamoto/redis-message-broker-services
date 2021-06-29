import express from 'express';
import adminCtrl from '../controllers/adminController.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/create', auth, adminCtrl.createPost);
router.patch('/:id', auth, adminCtrl.editPost);
router.delete('/:id', auth, adminCtrl.deletePost);
router.get('/all', auth, adminCtrl.getAllPost);
router.get('/login', adminCtrl.login);

export default router;

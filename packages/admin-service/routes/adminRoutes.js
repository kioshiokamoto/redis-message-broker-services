import express from 'express';
import adminCtrl from '../controllers/adminController.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/login', adminCtrl.login);
router.post('/create', auth, adminCtrl.createPost);
router.post('/addAdmin', adminCtrl.createAdmin);
router.get('/categories', auth, adminCtrl.getCategories);
router.patch('/:id', auth, adminCtrl.editPost);
router.delete('/:id', auth, adminCtrl.deletePost);
router.get('/all', auth, adminCtrl.getAllPost);

export default router;

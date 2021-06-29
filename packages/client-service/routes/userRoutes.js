import express from 'express';
import userCtrl from '../controllers/userController.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/register', userCtrl.register);
router.get('/login', userCtrl.login);
router.post('/saveQuest', auth, userCtrl.saveQuest);
router.get('/posts', auth, userCtrl.getAllPost);
router.get('/post/:id', auth, userCtrl.getSinglePost);

export default router;

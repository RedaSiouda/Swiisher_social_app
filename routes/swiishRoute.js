const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// CREATE new user
router.post('/v1/signUp', userController.createUser);

// LOGIN user
router.post('/v1/signIn', loginController.loginUser);

// GET all user
router.get('/v1/allUser', userController.getAllUser);

// POST swiish
router.post('/v1/swiish', upload.single('swiishPic'), postController.postSwiish);


// GET all swiish
router.get('/v1/getSwiish', postController.getAllSwiish);

// GET specific swiish
router.get('/v1/getSwiish/:id', postController.getSwiishById);

// DELETE swiish
router.delete('/v1/deleteSwiish/:id', postController.deleteSwiish);

module.exports = router;

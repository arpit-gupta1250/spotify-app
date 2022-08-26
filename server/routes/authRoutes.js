const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/authorize', authController.authorizeRequest);
router.post('/logout', authController.logout);

module.exports = router;
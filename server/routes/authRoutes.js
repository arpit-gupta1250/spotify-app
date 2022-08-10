const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/authorize', authController.authorizeRequest);

module.exports = router;
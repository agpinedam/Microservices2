const express = require('express');
const { getAuthUrl, handleOAuthCallback } = require('../controllers/userGoogleInfo');
const router = express.Router();

router.get('/', getAuthUrl);
router.get('/callback', handleOAuthCallback);

module.exports = router;

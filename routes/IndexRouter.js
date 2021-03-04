const express = require('express');
const { home, chatView } = require('../controllers/IndexController');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

router.get('/', home);
router.get("/chat", verifyToken, chatView)

module.exports = router;

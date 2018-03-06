
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/controllers');

/* Portfolio page */
router.get('/', ctrl.portfolio);

/* About page */
router.get('/about/', ctrl.about);

module.exports = router;

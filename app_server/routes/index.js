
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/controllers');

/* Welcome page */
router.get('/', ctrl.welcome);

/* Portfolio page */
router.get('/portfolio', ctrl.portfolio);

/* About page */
router.get('/about/', ctrl.about);

/* Contact page */
/*router.get('/contact/', ctrl.contact);*/

module.exports = router;

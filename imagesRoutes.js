const express = require('express');
const router = express.Router();
const { getImages } = require('./imagesController');
const {categoryCheck} = require('./middleware/categoryCheckMiddleware')

// GET request to get images
router.get('/:category', categoryCheck, getImages);

module.exports = router
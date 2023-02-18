const express = require('express');
const router = express.Router();
const { getImages } = require('./imagesController');
const {S3Retrieve} = require('./middleware/s3Retrieve')

// GET request to get images
router.get('/:category', S3Retrieve, getImages);

module.exports = router
const express = require('express');
const router = express.Router();
const fs = require('fs');
const asyncHandler = require('express-async-handler');


// @desc GET images
// @route GET /api/images/
// @access Public
const getImages = asyncHandler(async (req, res) => {
    let allFiles = req.images
    if (allFiles){
        res.status(200).json(allFiles)
    } else {
        res.status(404).json({status: "404"})
    }

})

module.exports = {
    getImages
};
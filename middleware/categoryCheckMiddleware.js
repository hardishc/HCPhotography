const { lookupService } = require('dns');
const asyncHandler = require('express-async-handler')
const path = require('path');
const fs = require("fs");

const categoryCheck = asyncHandler(async (req, res, next) => {
    const category = req.params.category
    let directoryPath = path.join('assets', 'images');
    let allFiles = [];
    
console.log('here')
    // if no category selected then combine all the images    
    if (category === "all") {
        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                req.msg = "Data not found"
                next()
            } else {
                let allImages = [];
                files.forEach(function (file) {
                    allFiles.push(file)
                });
                for (let i = 0; i < allFiles.length; i++) {

                    fs.readdir(path.join(directoryPath, allFiles[i]), function (err, files) {
                        // push to the array
                        allImages.push(files)
                        if (i === allFiles.length - 1) {
                            allImages = allImages.flat()
                            req.images = allImages
                            next()
                        }
                    })
                }
            }
        })
    } else {

        // else directory pathname === category
        directoryPath = path.join(directoryPath, category);
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                req.msg = "Data not found"
                next()
            } else {
                //listing all files using forEach
                files.forEach(function (file) {
                    // push them to the array
                    allFiles.push(file)
                });
                req.images = allFiles
                next()
            }
        })
    }
})


module.exports = { categoryCheck }
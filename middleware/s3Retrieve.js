const asyncHandler = require('express-async-handler')
const AWS = require('aws-sdk');

const S3Retrieve = asyncHandler(async (req, res, next) => {
    let category = req.params.category

    if(category === 'all') {
        category = ''
    }

    const s3 = new AWS.S3({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        Bucket: category
    });

    const params = {
        Bucket: 'hcphotography',
        Prefix: category
    }

    s3.listObjectsV2(params, function (err, data) {
        if (err) {
            req.msg = "Data not found"
            next()
        } else {
            const allFiles = data.Contents.filter(d=>(d.Key.includes('.')))        

            allFiles.forEach((image)=>{
                const t = image["Key"]
                if (t != '') {
                    image["Key"] = `https://hcphotography.s3.us-west-2.amazonaws.com/`+t;
                }
            })
            req.images = allFiles
            next()
        }
    })

})

module.exports = { S3Retrieve }
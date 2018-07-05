'use strict';

import AWS from 'aws-sdk';

class AWSS3 {
    constructor(config) {
        this.config = config || {};

        // Add validation for required fields

        this.s3obj = new AWS.S3({ params: { Bucket: config.options.bucketName }, apiVersion: 'latest', logger: console.log, accessKeyId: config.options.awsAccessKeyId, secretAccessKey: config.options.awsSecretAccessKey });
    }

    uploadFile(filePath, options) {
        // Add validation for required fields

        return new Promise((resolve, reject) => {
            var body = fs.createReadStream(filePath);

            s3obj.upload({ Body: body, Key: source.fileName, Bucket: options.bucketName })
                .on('httpUploadProgress', evt => {
                    console.log(evt);
                })
                .send((err, data) => {
                    if (err) {
                        console.log(`error while uploading file to S3 ${err} - ${err.stack}`)

                        reject(err);
                    } else {
                        console.log(`file upload successful ${JSON.stringify(data)}`);

                        resolve(data);
                    }
                });
        });
    }
}

module.exports = AWSS3;
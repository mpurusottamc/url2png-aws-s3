'use strict';

import fs from 'fs';
import config from 'config';
import URL2PNG from './lib/url-png.js';
import AWSS3 from './lib/aws-s3.js';

console.log(`Configuration: ${JSON.stringify(config)}`);

function main() {
    const url = 'www.cloudanix.com';
    const url2png = new URL2PNG(config);

    const awsS3 = new AWSS3(config.s3);

    url2png.generateScreenshot(url)
        .then(result => {
            console.log(`url2png success: ${result}`);

            return awsS3.uploadFile(result, config.s3.options);
        })
        .then(filePath => {
            console.log(`upload file success: ${filePath}`);

            fs.unlink(filePath, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`file deleted: ${filePath}`);
                }
            })
        })
        .catch(error => {
            console.log(`failed to generate screenshot from url2png and upload to S3 for ${url} : ${error} - ${error.stack}`);
        });
}

main();
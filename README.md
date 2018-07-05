# url2png-aws-s3
Generate Screenshot (url2png) and save in AWS S3

```
{
    "url2png": {
        "auth": {
            "apiKey": "<url2png api key>",
            "privateKey": "<url2png private key>"
        },
        "options": {
            "thumbnail_max_width": 1000,
            "viewport": "1480x1037",
            "fullpage": false
        }
    },
    "tempPath": "tmp",
    "s3": {
        "auth": {
            "awsAccessKeyId": "<AWS Access Key>",
            "awsSecretAccessKey": "<AWS Secret Access Key>"
        },
        "options": {
            "bucketName": "<Bucket Name>"
        }
    }
}
```

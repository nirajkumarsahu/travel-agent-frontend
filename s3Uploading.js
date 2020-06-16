var path = require('path');
var version = require('./package.json').version;
var Uploader = require('s3-uploading').default;
var env = (process.env.NODE_ENV || 'staging').toUpperCase();

// CHOTOT_VEHICLE_PRODUCTION/1.0.1
var BUCKET_PATH = `casa2inns.assets/webassets_test`;

const options = {



  s3: {
    accessKeyId: "AKIAJVXHKBV5HDGWFBWA",
    secretAccessKey: "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",
    region: 'ap-south-1',
    ACL: 'public-read',
    sslEnabled: false
  },
  upload: {
    directory: path.resolve(__dirname, '.next'), // path to built directory
    bucket: BUCKET_PATH
  }
};
const job = new Uploader(options);
job.upload();
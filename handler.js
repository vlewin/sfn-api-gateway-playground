'use strict';
const AWS = require('aws-sdk');

module.exports.start = (event, context, callback) => {
  callback(null, `Started successfully`);
};

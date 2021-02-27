
'use strict';

// This code is from:  http://marcelog.github.io/articles/aws_lambda_check_website_http_online.html
// This really works
// ALl you have to do is add a schedule (like once a minute) and the create a cloudwatch alert on individual function : choose this: error: sum more than 0
// and send SNS based on that alert


var url = require('url');
var target = 'https://www.somewebsite.com/'; // Change this one

exports.handler = function(event, context, callback) {
  var urlObject = url.parse(target);
  var mod = require(
    urlObject.protocol.substring(0, urlObject.protocol.length - 1)
  );
  console.log('[INFO] - Checking ' + target);
  var req = mod.request(urlObject, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('[INFO] - Read body chunk');
    });
    res.on('end', function() {
      console.log('[INFO] - Response end');
      callback();
    });
  });

  req.on('error', function(e) {
    console.log('[ERROR] - ' + e.message);
    callback(e);
  });
  req.end();
};


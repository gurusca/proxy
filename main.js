var express = require('express');
var app = express();
var http = require('http');

app.use('/', function(req, res) {
  var options = {
    // 여기에 리버스 프록시 대상 서버의 주소와 포트를 입력하세요.
    host: 'https://antigonus-cosmos.hf.space/proxy/aws/claude',
    port: 7860,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  var proxy = http.request(options, function (target_res) {
    res.writeHead(target_res.statusCode, target_res.headers);
    target_res.pipe(res, {
      end: true
    });
  });

  req.pipe(proxy, {
    end: true
  });
});

app.listen(7860);

const http = require('http');
const url = require('url');
const querystring = require('querystring');

const proxyUrl = 'https://hopeman-claude.hf.space/proxy/aws/claude';

const server = http.createServer((req, res) = {
  const parsedUrl = url.parse(req.url);
  
  if (parsedUrl.pathname === '/') {
    res.write('<h1>hus</h1>');
    res.end();
  } else if (parsedUrl.pathname === '/aws/claude') {
    const query = querystring.parse(parsedUrl.query);
  
    // 프록시 서버로의 요청 전달 (기존 코드)
  } else {
    res.write('Invalid path!');
    res.end();
  }
});

server.listen(7860);

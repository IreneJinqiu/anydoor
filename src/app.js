const http=require('http');

const chalk=require('chalk');

const conf=require('./config/defaultConfig');

const server=http.createServer((req,res)=>{
    res.statusCode=200;
res.setHeader('Content-Type','text/plain');
res.write('<html>');
res.write('<body>');
res.write('hello http');
res.write('</body>');
res.end('</html>');
});

server.listen(conf.port,conf.hostname,()=>{
    const addr='http://${const.hostname}:${conf.port}'
    console.info('Server started at ${chalk.green(addr)}');
});
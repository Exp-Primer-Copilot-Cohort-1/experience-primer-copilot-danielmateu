// Create web server
// 1. get request from client
// 2. read file
// 3. write file
// 4. response to client

const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url).pathname;
    console.log(pathName);
    if (pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end('<h1>hello world</h1>');
    } else if (pathName === '/home') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end('<h1>home</h1>');
    } else if (pathName === '/about') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end('<h1>about</h1>');
    } else if (pathName === '/contact') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end('<h1>contact</h1>');
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify({ name: 'hong', age: 20 }));
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('<h1>page not found</h1>');
    }
});

server.listen(port, () => {
    console.log(`server is running on ${port}`);
});





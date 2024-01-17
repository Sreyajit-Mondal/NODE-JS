// Import the http module
const http=require('http');
// Configure the HTTP server to respond with "Hello, World!" to all requests

const server = http.createServer((req, res) => {
//---> in this function 1st 'req' paramiter is for "REQUEST"and 2nd 'res' for "RESPONCE".
  
  res.write("<h1>I am a server.....</h1>");//-->for writethe contend
  res.end();//-->for end the responce we use end.
});
// Specify the port and IP address for the server to listen on
const port = 4500;
const ip = '127.0.0.1';
// Start the server
server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});

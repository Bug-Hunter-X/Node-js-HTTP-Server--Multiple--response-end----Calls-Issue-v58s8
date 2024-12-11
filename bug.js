const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});

//Uncommon error:  Incorrect use of `response.end()` leading to incomplete responses or unexpected behavior

//Example Scenario:
// If you try to call `response.end()` multiple times with different data in quick succession, this might lead to unexpected behavior because the Node.js HTTP server might not handle the multiple calls to `response.end()` correctly, resulting in the client receiving only a part of the response or unexpected errors.
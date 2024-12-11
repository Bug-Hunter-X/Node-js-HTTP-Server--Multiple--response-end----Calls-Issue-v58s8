const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  let dataSent = false; // Flag to track if data has already been sent

  const sendResponse = () => {
    if (!dataSent) {
      response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
      dataSent = true; 
    }
  };
  
  // Simulate an asynchronous operation that might trigger multiple response attempts
  setTimeout(sendResponse,100);
  setTimeout(sendResponse,200); //This will not send data again because dataSent is true
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});
//The solution ensures that `response.end()` is called only once, preventing the potential for incomplete or unexpected responses.
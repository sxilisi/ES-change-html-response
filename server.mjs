import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    "<html><body><h1>Welcome to my server created with Node.js!</h1></body></html>"
  );
});

server.listen(3000, () => {
  console.log(`Server runnig at http://localhost:3000`);
});

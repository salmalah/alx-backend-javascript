const http = require('http');
const { readCSV } = require('./3-read_file_async');

const PORT = 1245;

const app = http.createServer((req, res) => {
  // Set the response content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Check the URL path and handle requests accordingly
  if (req.url === '/') {
    // Display "Hello Holberton School!" for the root path
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Display student list for the /students path
    res.statusCode = 200;
    readCSV(process.argv[2], (error, data) => {
      if (error) {
        res.end('This is the list of our students\nCannot load the database\n');
      } else {
        const students = JSON.parse(data);
        res.end(`This is the list of our students\n${students}`);
      }
    });
  } else {
    // Return 404 Not Found for other paths
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Listen on the specified port
app.listen(PORT);

// Export the HTTP server
module.exports = app;

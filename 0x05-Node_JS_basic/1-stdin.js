process.stdin.setEncoding('utf8');

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', function(data) {
  const input = data.trim();
  if (input !== '') {
    process.stdout.write(`Your name is: ${input}\n`);
    process.stdout.write("This important software is now closing\n");
    process.exit();
  }
});

process.stdin.on('end', function() {
  process.stdout.write("This important software is now closing\n");
  process.exit();
});

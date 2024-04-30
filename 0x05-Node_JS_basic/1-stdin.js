process.stdout.write('Welcome to Holberton School, What is your name?');
// take input from stdin
const { stdin } = process;
stdin.on('data', (name) => {
  // print user input to console.
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
    // process.exit()
  }
});
stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

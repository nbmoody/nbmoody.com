const mongoose = require('mongoose');

const dbURI = 'mongodb://simpleuser:simplepassword1@ds141786.mlab.com:41786/portfolio' //Need to stick this into an environment variable instead of my source, but later.
mongoose.connect(dbURI);


const readLine = require('readline');
if (process.platform === 'win32'){
  const rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit("SIGINT");
  });
}

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

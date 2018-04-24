const mongoose = require('mongoose');
const readLine = require('readline');


const dbURI = process.env.MLAB_URI;

// Mongoose schema for the documents that will be accessed from MongoDB in mLab.
const projectSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    'default': '/images/placeholder.png'},
  title: {
    type: String},
  linkURL: {
    type: String},
  tags: [String],
  summary: String
});

mongoose.model('projectsModel', projectSchema, 'projects');
mongoose.connect(dbURI);


/*----------- EVENT LISTENERS and DB DISCONNECT-ON-CLOSE---------------*/

// Use the readLine package to throw SIGINT on Windows exit
if (process.platform === 'win32'){
  const rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('SIGINT', () => {
    process.emit("SIGINT");
  });
}

// callback on exit event
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

//Event listners
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
  console.log()
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const emitter = require('./sendEmail');

emitter.on('emailEvent', (message) => {
  console.log(`E-mail: ${message}`);
});

emitter.emit('emailEvent', 'Send activation e-mail to user after registration.!');

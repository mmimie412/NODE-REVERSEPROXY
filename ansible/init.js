const mongoose = require('mongoose');
mongoose.connect('mongodb://172.31.94.105:27017/devops', { useNewUrlParser: true, useUnifiedTopology: true });

const Dev = mongoose.model('Dev', { name: String });

Dev.insertMany([{ name: 'Team 28' }, { name: 'Team B' }, { name: 'Team C' }])
  .then(() => {
    console.log('Database seeded successfully');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
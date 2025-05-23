const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://172.31.94.105:27017/devops', { useNewUrlParser: true, useUnifiedTopology: true });

const Dev = mongoose.model('Dev', { name: String });

app.get('/', async (req, res) => {
  const devs = await Dev.find();
  const names = devs.map(d => `<li>${d.name}</li>`).join('');
  const message = "<p style='font-weight: bold; color: blue;'>This pipeline was built by Mildred</p>";
  res.send(`<h1>I’m building pipelines like a pro!</h1><ul>${names}</ul>`);
});

app.listen(3000, '0.0.0.0', () => console.log('App running on port 3000'));
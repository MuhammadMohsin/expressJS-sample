'use strict';
const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world');
});
app.get('/ping',(req,res)=> {
 res.send ("Hey whats up!");
});
app.get('/bad-ping',(req,res)=> {
    res.status(500).send('Sorry I am down ;(');
});
app.listen(PORT);
console.log(`Running on localhost:${PORT}`);

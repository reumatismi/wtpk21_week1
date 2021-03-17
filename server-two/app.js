'use strict';
const express = require('express');
// import express from 'express';
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frankie-boi',
    age: 6,
    weight: 5,
  };
  res.json(cat);
});
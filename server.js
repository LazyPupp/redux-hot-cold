'use strict';

const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const {HighScore} = require('./models');
app.use(bodyParser.json());
app.use(cors());
app.get('/high-score',(req,res)=>{
  return res.json(HighScore.get());
});

app.post('/high-score',(req,res)=>{
  //console.log(req.body.score);
  let score;
  //if(!isNaN(req.body.score)){
    score = HighScore.create(req.body.score);
  //}
  return res.status(201).json(score);
});

app.listen(8080,()=>{
  console.log('listening on port 8080');
});
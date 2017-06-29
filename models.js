'use strict';

function StorageException(message) {
  this.message = message;
  this.name = 'StorageException';
}
const HighScore = {
  create:function(highScore){
    if(highScore > 0){
      this.scores.push(highScore);
    }
    return highScore;
  },
  get:function(){
    return this.scores.sort((a,b)=>{
      return a-b;
    });
  }
};

function createHighScoreModel() {
  const storage = Object.create(HighScore);
  storage.scores = [];
  return storage;
}

module.exports = {HighScore:createHighScoreModel()};
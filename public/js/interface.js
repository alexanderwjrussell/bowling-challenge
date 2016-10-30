$(document).ready(function(){

  var game = new BowlingGame();

  function updateScore() {
  $('#current-score').text(game.currentScore);
  $('#current-roll').text(game.currentRoll);
  }

  updateScore();

  $('#zero-pins').on('click', function(){
    game.roll(0);
    updateScore();
  })

  $('#one-pin').on('click', function(){
    game.roll(1);
    updateScore();
  })

  $('#two-pins').on('click', function(){
    game.roll(2);
    updateScore();
  })

  $('#three-pins').on('click', function(){
    game.roll(3);
    updateScore();
  })

  $('#four-pins').on('click', function(){
    game.roll(4);
    updateScore();
  })

  $('#five-pins').on('click', function(){
    game.roll(5);
    updateScore();
  })

  $('#six-pins').on('click', function(){
    game.roll(6);
    updateScore();
  })

  $('#seven-pins').on('click', function(){
    game.roll(7);
    updateScore();
  })

  $('#eight-pins').on('click', function(){
    game.roll(8);
    updateScore();
  })

  $('#nine-pins').on('click', function(){
    game.roll(9);
    updateScore();
  })

  $('#ten-pins').on('click', function(){
    game.roll(10);
    updateScore();
  })
})

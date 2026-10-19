const score=JSON.parse(localStorage.getItem('score'))||{
  Wins:0,
  Losses:0

};

function playGame(guess){

  const randomNumber=Math.random();
  const result=randomNumber<0.5? 'heads':'tails';
  document.querySelector('.js-choice')
  .innerHTML=`You choose: ${guess},
               result:${result}`;


  

  if(guess===result){
    score.Wins++;
  }
  else{
    score.Losses++;
  }

  document.querySelector('.js-score')
  .innerHTML=`${JSON.stringify(score)}`;


}

localStorage.setItem('score', JSON.stringify(score));





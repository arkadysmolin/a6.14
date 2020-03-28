const numDivs = 36;
const maxHits = 10;

let missHits=0;
let hits = 0;
let firstHitTime;

function round() {
   $('.target').removeClass('target'); // убрать "target" прежде чем искать новый
   $('.miss').removeClass('miss'); // убираем промахи
  if (hits==1){
    console.log("количество кликов:",hits);
    firstHitTime=getTimestamp();
  }
  
  console.log("клики, время начала и текущее:",hits,firstHitTime,getTimestamp());

  let divSelector = randomDivId(); // выбираем случайную клетку
  $(divSelector).addClass("target"); // красим её в зелёный
  $(divSelector).text(hits+1);
  // TODO: помечать target текущим номером


  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $('.game-field').hide(); // не я

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  let totaloGamePoint=10-missHits;
  $("#total-time-played").text(totalPlayedSeconds);
  $("#poinCount").text(totaloGamePoint);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) { // обрабатываем клик по клетке
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  let target = $(event.target) // непонятно что это
  if ($(event.target).hasClass("target")) { // если попал точно
    hits = hits + 1;
    target.text(''); // почему нет оператора присваивания
    round();
  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
  else { $(event.target).addClass('miss');
  missHits=missHits+1; } 

}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round(); // вызываем функцию назначения случайной клетки

  $(".game-field").click(handleClick); // обрабатываем клик по клетке
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);

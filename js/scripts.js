//backend logic

function beepBoop(userNumber) {
  for (var i = 0; i < userNumber + 1; i++) {
    var numbers = i.toString().split(' ');
    numbers.forEach(function (number) {
      if (number.indexOf('3') > -1) {
        console.log(`I'm sorry, Dave. I'm afraid I can't do that.`);
        return;
      } else if (number.indexOf('2') > -1) {
        console.log('Boop!');
        return;
      } else if (number.indexOf('1') > -1) {
        console.log('Beep!');
        return;
      } else {
        console.log(i);
      }
    });
  };
};

//frontend logic

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($('#input').val());
    var answer = beepBoop(userInput)
    $('.output').html("<li>" + answer + "</li>");
    console.log(answer);
  });
});

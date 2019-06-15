//backend logic

function beepBoop(userNumber) {
  for (var i = 0; i < userNumber + 1; i++) {
    var numbers = i.toString().split(' ');
    numbers.forEach(function (number) {
      if (parseInt(number) === 1980) {
        $('.easter-egg').show();
      }else if (number.indexOf('3') > -1) {
        $('.output').append("<li> Im sorry, Dave. I'm afraid I can't do that.</li>");
      } else if (number.indexOf('2') > -1) {
        $('.output').append('<li> BOOP! </li>');
      } else if (number.indexOf('1') > -1) {
        $('.output').append('<li> BEEP! </li>');
      } else {
        $('.output').append('<li>' + i + '</li>');
        return;
      }
    });
  };
};

//frontend logic

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    $('ul.output').empty();
    var userInput = parseInt($('#input').val());
    beepBoop(userInput);
    $('#input').val('');
  });
});

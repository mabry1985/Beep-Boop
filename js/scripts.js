//backend//

function beepBoop(userNumber) {
  for (var i = 0; i < userNumber + 1; i++) {
    var numbers = i.toString().split(' ');
    var name = $('#name').val();
    numbers.forEach(function (number) {
      if (i % 3 === 0) {
        $('.output').append('<li> Im sorry, ' + name + ", I'm afraid I can't do that.</li>");
      } else if (number.indexOf('3') > -1) {
        $('.output').append("<li> Im sorry, Dave, I'm afraid I can't do that.</li>");
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

function beepBoopReverse(userNumber) {
  for (var i = 0; i < userNumber + 1; i++) {
    var numbers = i.toString().split(' ');
    var name = $('#name').val();
    numbers.forEach(function (number) {
      if (i % 3 === 0) {
        $('.output').prepend('<li> Im sorry, ' + name + ", I'm afraid I can't do that.</li>");
      } else if (number.indexOf('3') > -1) {
        $('.output').prepend("<li> Im sorry, Dave, I'm afraid I can't do that.</li>");
      } else if (number.indexOf('2') > -1) {
        $('.output').prepend('<li> BOOP! </li>');
      } else if (number.indexOf('1') > -1) {
        $('.output').prepend('<li> BEEP! </li>');
      } else {
        $('.output').prepend('<li>' + i + '</li>');
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
    $('.easter-egg').hide();
    var userInput = parseInt($('#input').val());
    var name = $('#name').val();
    beepBoop(userInput);
    if (userInput === 1980) {
      $('.easter-egg').show();
    };

    $('#name').val('');
    $('#input').val('');
  });

  $('.reverse').click(function () {
    $('ul.output').empty();
    $('.easter-egg').hide();
    var userInput = parseInt($('#input').val());
    var name = $('#name').val();
    beepBoopReverse(userInput);
    if (userInput === 1980) {
      $('.easter-egg').show();
    };

    $('#name').val('');
    $('#input').val('');
  });
});

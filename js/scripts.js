//backend logic

function beepBoop(userNumber, name) {
  var numArr = [];
  for (var i = 0; i < userNumber + 1; i++) {
    var numbers = i.toString();
    if (i % 3 === 0) {
      numArr.push('Im sorry, ' + name + ", I'm afraid I can't do that.");
    } else if (numbers.includes('3')) {
      numArr.push("Im sorry, Dave, I'm afraid I can't do that.");
    } else if (numbers.includes('2')) {
      numArr.push('BOOP!');
    } else if (numbers.includes('1')) {
      numArr.push('BEEP!');
    } else {
      numArr.push(i);
    }
  }

  return numArr;
};

//frontend logic

$(document).ready(function () {
  $('#formOne').submit(function (event) {
    event.preventDefault();
    $('ul.output').empty();
    $('.easter-egg').hide();
    var userInput = parseInt($('#input').val());
    var name = $('#name').val();
    var numArr = beepBoop(userInput, name);
    numArr.forEach(function (numArr) {
      $('ul.output').append(numArr + '<br>');
    });

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
    var numArr = beepBoop(userInput, name);
    numArr.forEach(function (numArr) {
      $('ul.output').prepend(numArr + '<br>');
    });

    if (userInput === 1980) {
      $('.easter-egg').show();
    };

    $('#name').val('');
    $('#input').val('');
  });
});

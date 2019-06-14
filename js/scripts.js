function beepBoop(userNumber) {
  for (var index = 0; index < userNumber + 1; index++) {
    if (index === 3) {
      console.log(`Im sorry, Dave. I'm afraid I can't do that.`);
    } else if (index === 2) {
      console.log('Boop!');
    } else if (index === 1) {
      console.log('Beep!');
    } else {
      console.log(index);
    }
  }
};

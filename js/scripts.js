function beepBoop(userNumber) {
  for (var index = 0; index < userNumber + 1; index++) {
    if (index === 3) {
      return "I'm sorry, Dave. I'm afraid I can't do that."
    } else {
      console.log(index)
    }
  }
};

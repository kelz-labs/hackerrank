/*
 * Create the function factorial here
 */
function factorial(param) {
  let jawaban = 1;
  if (param == 0 || param == 1) {
    return jawaban;
  } else {
    for (let i = param; i >= 1; i--) {
      jawaban = jawaban * i;
    }

    return jawaban;
  }
}

factorial(4);

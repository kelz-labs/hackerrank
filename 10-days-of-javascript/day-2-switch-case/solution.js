function getLetter(s) {
  let letter;

  // logic: kita pengen mengetahui huruf depan suatu kalimat itu apa, maka disini memakai index[0] buat ngelihat huruf depannya itu apa
  switch (s[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "A";
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      return "B";
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      return "C";
      break;

    default:
      return "D";
      break;
  }

  return letter;
}

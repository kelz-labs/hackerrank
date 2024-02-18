/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
/*function vowelsAndConsonants(s) {
  const vowels = "aiueo";
  let consonants = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }

  console.log(consonants);
}*/

// jika pake es6
function vowelsAndConsonants(str) {
  // expected: aasy
  const vowels = "aiueo";
  let consonants = [];

  return (
    str
      .split("")
      .filter((item, index) => vowels.includes(str[index]))
      .join("\n") +
    "\n" +
    str
      .split("")
      .filter((item, index) => !vowels.includes(str[index]))
      .join("\n")
  );
}

console.log(vowelsAndConsonants("saya"));

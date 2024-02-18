/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

function reverseString(str) {
  try {
    str = str.split("").reverse().join();
  } catch (err) {
    console.log("s.split is not a function");
  }

  return str;
}

console.log(reverseString("12345"));

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  let math = parseFloat(readLine());
  const PI = Math.PI;

  // luas dan keliling lingkaran
  let luas = PI * (math * math);
  let keliling = 2 * (PI * math);

  // Print the area of the circle:
  console.log(luas);
  // Print the perimeter of the circle:
  console.log(keliling);
}

/**
 * Task: kembalikan sebuah array of number dengan ketentuan:
 *
 * - Jika element bernilai ganjil, maka kalikan dengan 2
 * - Jika element bernilai genap, maka kalikan dengan 3
 */
function modifyArray(nums) {
  return nums.map((value) => (value % 2 === 0 ? value * 2 : value * 3));
}

console.log(modifyArray([1, 2, 3, 4, 5, 6]));

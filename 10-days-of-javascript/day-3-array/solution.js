/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  const math = Math.max(...nums);
  const newNums = nums.filter((num) => num !== math);

  return Math.max(...newNums);
}

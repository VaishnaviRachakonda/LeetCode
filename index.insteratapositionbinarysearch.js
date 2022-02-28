/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target, start = 0, end = nums.length - 1) {
  // console.log(start,end)
  if (start >= end) {
    if(end+1 == nums.length && nums[end]<target) return end+1
    if(start == 0 && nums[0] > target) return 0
    if(start == 0 && nums[0] < target) return 1
    return start===end?start:start+1
  }
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) return mid;
  else if (nums[mid] > target) return searchInsert(nums, target, start, mid - 1)
  else if (nums[mid] < target) return searchInsert(nums, target, mid + 1, end);
};

console.log('1', searchInsert([1, 2, 3, 4, 5, 6], 5))//4
console.log('2', searchInsert([1, 2, 3, 4, 5, 6], 10))//6
console.log('3', searchInsert([1, 2, 3, 4, 5, 8], 7))//5
console.log('4', searchInsert([1, 2, 3, 4, 5, 6], 0))//0
console.log('5', searchInsert([1, 2, 3, 4, 5, 6], 1))//0
console.log('4', searchInsert([1, 2, 3, 4, 5, 6], 6))//5
console.log('7', searchInsert([1,3,5,6],2))//1

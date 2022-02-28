/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length == 0) return [];
  let res = [], lastNum = -1,str = '';;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1]) {
      if (str.length == 0) {
        str += nums[i]
      }
      else {
        lastNum = nums[i]
      }

    }
    else {
        str =str.length>0?str+ '->'+nums[i]:nums[i]+'';
        res.push(str);
        str=''
      }
  }
  return res
};
console.log('1', summaryRanges([0, 1, 2, 3, 7, 8, 9, 11]))
console.log('2', summaryRanges([0,2,3,4,6,8,9,12]))
console.log('3', summaryRanges([0,1,2,4,5,7]))
console.log('4', summaryRanges([0,2,4,6,8,10,111]))
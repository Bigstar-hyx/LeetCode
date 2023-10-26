/**
 * 存疑：
 * 1. 为什么返回数值是整数，但输出的答案是数组呢?没懂
 */

/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i <= nums.length; ) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums.length
};

/**
 * 双指针法
 * 要点在于更新了nums前面的元素值，j是记录更新了几个元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = (nums, val) => {
    let j = 0;
    for(let i = 0;i < nums.length;i++){
        if(nums[i] != val){
            nums[j] = nums[i] // 从头开始更新元素
            j++ 
        }
    }
    return j; // 最后输出的是前几个不符合的元素
};
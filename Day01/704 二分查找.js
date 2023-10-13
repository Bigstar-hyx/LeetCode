/**
 * 存疑：
 * 1. middle 定义如何防溢出，以及溢出是什么场景；
 * 2. return -1 这个不会被反复执行吗，这个return是出while还是search函数
 * 3. >> 移位运算？？？
*/

/**
 * 时间 68 ms，击败 85.89%
 * 内存 42.76 MB，击败 74.83%
 * 无算法写法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var search = function(nums, target) {
    for (let i = 0; i <= nums.length; i ++) {
        if (nums[i] === target) {
            return i
        } else if (i === nums.length && nums[i] !== target) {
            return -1
        }
    }
};



/**
 * 时间 60 ms，击败 85.89%
 * 内存 43.8 MB，击败 62.41%
 * 二分查找-左闭右闭
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        // let middle = Math.ceil((right + left)/2)
        let middle = (left + right) >> 1
        if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        } 
    }
    return -1
};


/**
 * 时间 60 ms，击败 85.89%
 * 内存 43.5 MB，击败 98.57%
 * 二分查找-左闭右开
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

var search = function(nums, target) {
    let left = 0
    let right = nums.length
    while (left < right) {
        // let middle = Math.ceil((left + right) / 2)
        let middle = (left + right) >> 1
        if (nums[middle] > target) {
            right = middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else if (nums[middle] === target) {
            return middle
        }
    }
    return -1
};


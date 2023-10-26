/**
 * 暴力解决
 * map 返回一个新的数组
 * sort 改变原始数组
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(item => item * item).sort((a, b) => a - b)
    
};

/**
 * 双指针
 * Math.abs 求绝对值
 * unshitf() 将新项插入到数组初始位置
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    let result = []
    for (let i = 0, j = nums.length - 1; i <= j; ) {
        if ( Math.abs(nums[i]) < Math.abs(nums[j])) {
            result.unshift(nums[j] * nums[j])
            j--
        } else {
            result.unshift(nums[i] * nums[i])
            i++
        }
    }
    return result
}

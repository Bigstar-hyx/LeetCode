/**
 * 暴力解法
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity 
    let leg
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if ( sum >= target) {
                minLength = Math.min(minLength, j-i+1)
                break
            }
        }
    }
    return minLength === Infinity ? 0 : minLength
};

/**
 * 滑动窗口
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity
    let i = 0
    let sum = 0
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j]
        while ( sum >= target) {
            minLength = Math.min(minLength, j-i+1)
            sum -= nums[i]
            i++
        }
    }
    return minLength === Infinity ? 0 : minLength
};
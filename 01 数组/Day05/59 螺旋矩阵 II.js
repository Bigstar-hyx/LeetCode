/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0)) // 构件一个n^2的二维数组
    let x, y 
    x = y = 0
    let loop, mid // 循环圈数和中心位置，如果n是奇数的话，就需要用到mid
    loop = mid = Math.floor(n/2)
    let count, offset // 递增数和圈长度
    count = offset = 1
    let i, j
    // 循环圈数存在进入循环，顺时针
    while ( loop-- ) {
        // 确认循环的初始位置
        i = x
        j = y

        // 上圈循环，从左到右填充
        for (; j < n - offset; j++) {
            res[x][j] = count
            count++
        }
        // 右圈循环，从上到下填充
        for (; i < n - offset; i++) {
            res[i][j] = count
            count++
        }
        // 下圈循环，从右到左填充
        for (; j > y; j--) {
            res[i][j] = count
            count ++
        }
        // 左圈循环，从下到上填充
        for (; i > x; i--) {
            res[i][j] = count
            count++
        }
        // 一个完整循环结束后，重定义新的循环起点
        x++
        y++
        // 更新圈长度
        offset += 1
    }
    // 如果n是奇数，单独给中心赋值
    if ( n % 2 === 1) {
        res[mid][mid] = count
    }
    return res
};
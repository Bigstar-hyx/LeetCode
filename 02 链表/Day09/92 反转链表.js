/**
 * 双指针法
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head
    let pre = null
    let tmp
    while (cur) {
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
};

/**
 * 正向递归法
 * 从后往前翻转指针指向 没懂思路
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverse = function(pre, cur) {
    if (!cur) return pre
    let tmp = cur.next
    cur.next = pre
    return reverse(cur, tmp)
};

var reverseList = function(head) {
    return reverse(null, head)
};



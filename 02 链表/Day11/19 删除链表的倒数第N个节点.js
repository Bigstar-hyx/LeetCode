/**
 * 存在问题：循环的边界总是没搞清楚
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(0, head)
    let f = dummyHead
    let s = dummyHead
    // for (let i = 0; i < n-1; i++) {
    //     f = f.next
    // }
    while (n--) {
        f = f.next
    }
    while (f.next !== null) {
        f = f.next
        s = s.next
    }
    s.next = s.next.next
    return dummyHead.next
};
/**
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
var swapPairs = function(head) {
    const dummyHead = new ListNode(0)
    dummyHead.next = head
    let cur = dummyHead
    let tmp, tmp1
    while (cur.next.next && cur.next) {
        tmp = cur.next
        tmp1 = cur.next.next.next
        cur.next = cur.next.next
        cur.next.next = tmp
        cur.next.next.next = tmp1
        cur = cur.next.next
    }
    return dummyHead.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummyHead = new ListNode(0) // 定义一个虚拟节点
    dummyHead.next = head;
    let cur = dummyHead // 定义一个临时的指针，对原链表进行删除
    while (cur.next !== null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return dummyHead.next // 最后要返回的是链表，要返回头节点，所以是虚拟头节点的next
};
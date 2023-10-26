/**
 * 要点1：删除头节点的处理
 */
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
    const ret = ListNode(0, head); // 没懂什么意思，为什么要定义一个不可变的
    let cur = ret; // 为什么还要在定一个可变的节点？还是链表？
    while(cur.next) {
        if (cur.next.val = val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next
    }
    return ret.next
};

/**
 * 力扣官方给出的题解，用的是递归，思路懂，但不会写，多练练就好了
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
            return head;
        }
        head.next = removeElements(head.next, val);
        return head.val === val ? head.next : head;
};
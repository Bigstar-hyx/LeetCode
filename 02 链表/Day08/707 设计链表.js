// 创建一个链表
class ListNode {
    constructor (val, next) {
        this.val = val;
        this.next = next;
    }
}

// 初始化 MyLinkedList 对象
// 不知道需要做哪些初始化
var MyLinkedList = function() {
    this.size = 0 // 显然不知道这个是干嘛的
};

/** 
 * 功能1:获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1
 * 那么，在链表中如何取下标呢。
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head
    let cur = dummyHead
    while (head) {
        if (cur === index) {
            return cur.val
        }
        cur = cur.next
    }
    return -1
};

/** 
 * 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let dummyHead = new ListNode(0)
    dummyHead.next = this.head
    dummyHead.next = val
    dummyHead.next.next = this.head
    head = dummyHead.next
    return this.head
};

/** 
 * 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
 * 要定位到最后一个节点
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val)
    // .next= node
    node.next = null
};

/** 
 * 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。
 * 如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。
 * 如果 index 比长度更大，该节点将 不会插入 到链表中。
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
};

/** 
 * 如果下标有效，则删除链表中下标为 index 的节点。
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
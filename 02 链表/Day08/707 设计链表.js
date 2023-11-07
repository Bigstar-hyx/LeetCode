/**
 * 创建一个链表
 */ 
class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/** 
 * 初始化 MyLinkedList 对象
 * 不知道需要做哪些初始化
 * 初始化链表的长度、头/尾，但不知道这是什么意思，
 * 可能跟下面的要操作头尾节点有关吧，正常的可能不需要这样子做
 */ 
var MyLinkedList = function() {
    this._size = 0;
    this._tail = null;
    this._head = null;
};


/**
 * 讲真，很多题解都有这个，都定义了这个方法，
 * 但是不定义应该也可以吧，不是很清楚这样做的原因
 * （模仿就对了。。
 * 好像懂了，是用来遍历的，然后调用直接传下标值就行
 * 好像明白了，链表的遍历没有办法像数组一样直接取下标；
 * 即使你知道这个是第100个数，你也只能一个个的遍历过去的取数，index就只是用来循环的倒计时
 * @param {number} index 
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
    if (index < 0 || index >= this._size) {
        return null
    }
    let cur = new LinkNode(0, this._head) //创建虚拟头节点
    // 遍历？不懂这个是用来干嘛的
    while (index-- >= 0) {
        cur = cur.next
        // index --
    }
    return cur
};


MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this._size) {
        return -1
    }
    return this.getNode(index).val;
};

/** 
 * 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new LinkNode(val, this._head)
    this._head = node
    this._size++
    if (!this._tail) {
        this._tail = node
    }
};

/** 
 * 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
 * 要定位到最后一个节点
 * @param {number} val 
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new LinkNode(val, null)
    this._size++
    if (this._tail) {
        this._tail.next = node
        this._tail = node
        return
    }
    this._tail = node
    this._head = node
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
    if (index > this._size) {
        return 
    }
    if (index <=0) {
        this.addAtHead(val)
        return
    } 
    if (index === this._size) {
        this.addAtTail(val)
        return
    }
    const node = this.getNode(index - 1);
    node.next = new LinkNode(val, node.next);
    this._size++;
};


/** 
 * 如果下标有效，则删除链表中下标为 index 的节点。
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this._size) {
        return
    } 
    if (index === 0) { 
        // 删除头节点
        this._head = this._head.next
        // 只有一个节点的情况
        if (index === this._size -1) {
            this._tail = this._head
        }
        this._size--
        return
    } 
    const node = this.getNode(index - 1)
    node.next = node.next.next
    if (index === this._size -1) {
        // 删除尾节点
        this._tail = node
    }
    this._size--
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
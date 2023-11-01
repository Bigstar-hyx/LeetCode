# 链表的数据结构
```js
{
    value: 'aaa',
    next: {
        value: 'bbb',
        next: {...}
    }
}
```
为了确保链表的起始节点可以被访问，有时还会设定一个head指针专门指向链表的开始位置

# 链表的常规操作
## 创建
链表的创建关键在于链表节点的创建：
```js
class ListNode {
    value: any; // 链表节点本身的数据
    next: ListNode | null; // 链表节点的指针指向

    constructor (val: any) {
        this.value = val;
        this.next = null;
    }
}
// 创建新节点
const node = new ListNode('aaa');
```
## 添加节点
```js
// 在链表后面添加节点
const node = new ListNode('aaa');
node.next = new ListNode('bbb');

// 在两个节点中间插入节点
const node1 = new ListNode('aaa');
const node2 = new ListNode('bbb');
node1.next = node2;

const node3 = new ListNode('ccc');
node3.next = node1.next; // 这里能不能写成 node3.next = node2 呢
node1.next = node3
```
## 删除节点
把被删除节点的前一个节点的next，指向被删除节点原本的next
```js
node1.next = node3.next;

// 只有一个节点的场景
const temp = node1.next;
node1.next = temp.next;

// 删除头节点: 如果头节点不为空，那么将头指向头节点的下一个节点，让头节点成为下一个节点，这就删除了。
while (head != null) {
    head = head.next
}
```
存疑：只有一个节点的场景的逻辑不懂

## 访问节点
需要先通过遍历链表，去获取到该节点
问：没懂这是为什么
```js
const target = 3;
for ( let i = 0; i < target && node; i++ ) {
    node = node.next;
}
```
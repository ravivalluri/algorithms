const LinkedList = (value) => {
    this.value = value;
    this.next = null;
}

const deleteMiddleNode = (middleNode) => {
    let node = middleNode;
    while(node !== null && node.next !== null){
        node.value = node.next.value;
        if(node.next.next === null) {
            node.next = null;
        }
        node = node.next;
    }
}

const printList = (head) => {
    while(head !== null) {
        console.log(head.value);
        head = head.next;
    }
    console.log('done with list');
}

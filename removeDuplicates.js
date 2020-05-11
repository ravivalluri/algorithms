const LinkedList = (value) => {
    this.value = value;
    this.next = null;
}

const checkDuplicates = (head, node) => {
    let currentNode = head;
    while(currentNode !== node) {
        if(currentNode.value === node.value) {
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
}

const printLinkedList = (head) => {
    let node = head;
    console.log('start of linked list');
    while(node !== null) {
        console.log(node.value);
        node = node.next;
    }
    console.log('end of linked list');
}

const removeDuplicates = (head) => {
    let node = head;
    while(node !== null) {
        if(node.next !== null && checkDuplicates(head, node.next)){
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
}

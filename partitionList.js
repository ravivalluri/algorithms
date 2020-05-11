const LinkedList = (value) => {
    this.value = value;
    this.next = null;
}

const partitionList = (head, partition) => {
    let left, right, currentLeft = null, currentRight = null, node = head;
    while(node !== null) {
        if(node.value < partition) {
            if(currentLeft === null) {
                left = node;
                currentLeft = left;
            } else {
                currentLeft.next = node;
                currentLeft = currentLeft.next;
            }
        } else {
            if(currentRight === null) {
                right = node;
                currentRight = right;
            } else {
                currentRight.next = node;
                currentRight = currentRight.next;
            }
        }
        node = node.next;
    }
    currentRight.next = null;
    currentLeft.next = right;
    return left;
}

const printList = (a) => {
    while(a!==null) {
        console.log(a.value);
        a = a.next;
    }
    console.log('end of list')
}

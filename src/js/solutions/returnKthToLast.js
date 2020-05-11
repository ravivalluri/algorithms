const LinkedList = (value) => {
    this.value = value;
    this.next = null;
}

const findKthToLast = (k, head) => {
    if(head === null || k < 1) {
        return;
    } else if(k===1) {
        console.log(head.value);
        findKthToLast(k, head.next);
    } else {
        findKthToLast(k-1, head.next);
    }
}

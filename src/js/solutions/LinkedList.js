export function LinkedList(value) {
    this.value = value;
    this.next = null;
}

export const printList = (head) => {
    while(head !== null) {
        console.log(head.value);
        head = head.next;
    }
    console.log('end of list')
}

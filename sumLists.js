import { LinkedList, printList} from "./LinkedList";

const sumLists = (head1, head2) => {
    let node1 = head1, node2 = head2, node3 = null, head3 = null, ones, tens = 0, sum;
    while(node1 !== null && node2 !== null) {
        if(node1 === null) {
            sum = node2.value;
        } else if(node2 === null) {
            sum = node1.value;
        } else {
            sum = node1.value + node2.value;
        }
        sum += tens;
        ones = sum % 10;
        if(node3 === null) {
            head3 = new LinkedList(ones);
            node3 = head3;
        } else {
            node3.next = new LinkedList(ones);
            node3 = node3.next;
        }
        tens = Math.floor(sum/10);
        if(node1 !== null) {
            node1 = node1.next;
        }
        if(node2 !== null) {
            node2 = node2.next;
        }
    }
    if(tens>0) {
        node3.next = new LinkedList(tens);
        node3 = node3.next;
    }
    return head3;
}

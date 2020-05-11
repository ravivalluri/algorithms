import {LinkedList} from "./LinkedList";

const peek = (stack) => {
    return stack[stack.length - 1];
}

const intersectionList = (head1, head2) => {
    let stack1 = [], stack2 = [];
    while(head1 !== null) {
        stack1.push(head1);
        head1 = head1.next;
    }
    while(head2 !== null) {
        stack2.push(head2);
        head2 = head2.next;
    }
    if(stack1.length === 0 || stack2.length === 0) {
        return undefined;
    } else if(peek(stack1) !== peek(stack2)){
        return undefined;
    } else {
        let intersect;
        while(peek(stack1) === peek(stack2)) {
            intersect = peek(stack1);
            stack1.pop();
            stack2.pop();
        }
        return intersect;
    }
}

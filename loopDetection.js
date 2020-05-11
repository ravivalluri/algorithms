import {LinkedList} from "./LinkedList";
const loopDetection = (head) => {
    let slowPointer = head, fastPointer = head;
    while(fastPointer !== null) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
        if(slowPointer === fastPointer && fastPointer !== head.next){
            return true;
        }
        if(fastPointer !== null) {
            fastPointer = fastPointer.next;
            if(slowPointer === fastPointer) {
                return true;
            }
        }
    }
    return false;
}

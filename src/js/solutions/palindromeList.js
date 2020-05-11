import {LinkedList} from "./LinkedList";

const palindromeList = (head) => {
    let mid = head, end = head, isEven = true, firstHalf = null, frontNode = null;
    while(end.next !== null) {
        isEven = true;
        if(firstHalf === null) {
            firstHalf = new LinkedList(mid.value);
        } else {
            frontNode = firstHalf;
            firstHalf = new LinkedList(mid.value);
            firstHalf.next = frontNode;
        }
        mid = mid.next;
        end = end.next;
        if(end.next !== null) {
            end = end.next;
            isEven = false;
        }
    }
    if(!isEven) {
        mid = mid.next;
    }
    while (mid!==null){
        if(mid.value !== firstHalf.value){
            return false;
        }
        mid = mid.next;
        if(firstHalf !== null) {
            firstHalf = firstHalf.next;
        }
    }
    return true;
}

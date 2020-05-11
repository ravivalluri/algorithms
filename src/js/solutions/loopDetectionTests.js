//TESTS
const LinkedList = require('./utils/LinkedList');
import {loopDetection} from "./loopDetection";

export const loopDetectionTests = () => {
    let a = new LinkedList();
    let b = new LinkedList();
    let c = new LinkedList();
    let d = new LinkedList();
    let e = new LinkedList();
    let f = new LinkedList();

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    f.next = c;

    console.log(loopDetection(a), true);

    let A = new LinkedList();
    let B = new LinkedList();
    let C = new LinkedList();
    let D = new LinkedList();
    let E = new LinkedList();
    let F = new LinkedList();

    A.next = B;
    B.next = C;
    C.next = D;
    D.next = E;
    E.next = F;

    console.log(loopDetection(A), false);
}

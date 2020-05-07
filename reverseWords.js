import {reverseString} from "./reverseString";

export const reverseWords = (message) => {
    reverseString(message, 0, message.length-1);
    let currentWordStartIndex = 0;
    for(let i = 0; i<=message.length; i++) {
        if(i === message.length || message[i]===' '){
            reverseString(message, currentWordStartIndex, i-1);
            currentWordStartIndex = i + 1;
        }
    }
}
// O(n), O(1)

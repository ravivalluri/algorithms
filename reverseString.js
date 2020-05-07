export const reverseString = (inputString, leftIndex, rightIndex) => {
   while (leftIndex<rightIndex) {
       const temp = inputString[leftIndex];
       inputString[leftIndex]=inputString[rightIndex];
       inputString[rightIndex]=temp;
       leftIndex++;
       rightIndex--
   }
}

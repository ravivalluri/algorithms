export const mergeRanges = (calendarTimes) => {
   const calendarCopy = JSON.parse(JSON.stringify(calendarTimes));
   const sortedCalendar = calendarCopy.sort((a,b)=> {
       return a.startTime - b.startTime;
   })
    const mergedCalendar = [sortedCalendar[0]];
   for (let i = 0; i< sortedCalendar.length; i++) {
       const currentCalendar = sortedCalendar[i];
       const lastMergedCalendar =  mergedCalendar[mergedCalendar.length-1];
       if(currentCalendar.startTime<=lastMergedCalendar.endTime) {
           lastMergedCalendar.endTime = Math.max(lastMergedCalendar.endTime, currentCalendar.endTime)
       } else {
           mergedCalendar.push(currentCalendar);
       }
   }
   return mergedCalendar;
}

const sortScores = (unsortedScores, HIGHEST_POSSIBLE_SCORE) => {
    const scoreCounts = new Array(HIGHEST_POSSIBLE_SCORE + 1).fill(0);
    unsortedScores.forEach(score => {
        scoreCounts[score]++;
    });
    const sortedScores=[];
    for(let score = HIGHEST_POSSIBLE_SCORE; score>=0; score--){
        const count = scoreCounts[score];
        for(let time = 0; time<count; time++){
            sortedScores.push(score);
        }
    }
    return sortedScores;
}

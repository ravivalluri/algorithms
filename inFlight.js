const inFlight = (flightLength, movieLengths) => {
    const movieLengthsSeen = new Set();
    for(let i = 0; i<movieLengths; i++) {
        const firstMovieLength = movieLengths[i];
        const matchSecondMovieLength = flightLength - firstMovieLength;
        if(movieLengthsSeen.has(matchSecondMovieLength)) {
            return true;
        }
        movieLengthsSeen.add(firstMovieLength);
    }
    return false;
}
//O(n)

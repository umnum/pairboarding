function largestGap(N) {
	// only works for positive, non-zero numbers
	if (N <= 0) return 0;

	// largest gap of 0s between 1s
	let max = 0;

	// while there are trailing zeros, remove them
	while (N % 2 === 0) N /=2;

	// N is either odd or zero at this point
	while (N !== 0) {
		// count the number of 0s between 1s
		let count = 0;
		
		// start count zeros only if N is:
		// - non-zero
		// - is even (last diget is a 0)
		while (N !== 0 && N % 2 === 0) {
			N /= 2;
			count++;
		}
		// find the largest gap of 0s between 1s
		if (count > max) max = count;
		N = Math.floor(N/2)
	}
    return max;
}
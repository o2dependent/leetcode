function mySqrt(x: number): number {
	// assign pointers
	let low = 0;
	let high = x;
	// loop until equal
	while (low <= high) {
		// find midpoint - floor for perfect squares
		const mid = Math.floor((low + high) / 2);
		const val = mid * mid;
		// assign low if sqrt guess is less than or exactly x
		if (val <= x) low = mid + 1;
		// assign high
		else high = mid - 1;
	}
	return high;
}

console.log(`mySqrt(4) = ${mySqrt(4)}`);
console.log(`mySqrt(8) = ${mySqrt(8)}`);
console.log(`mySqrt(6) = ${mySqrt(6)}`);

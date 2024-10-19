/**
 * Fibonacci sequence
 */

function climbStairs(n: number): number {
	let first = 1;
	let second = 1;

	for (let i = 0; i < n - 1; i++) {
		const tmp = first;
		first = second;
		second = tmp + second;
	}
	return second;
}

console.log(climbStairs(2));
console.log(climbStairs(3));

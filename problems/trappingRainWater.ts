/**
 * Dynamic style
 * Break it up into forward and backwards movement
 * When we go forward we will get stuck on the highest point
 * Same with backwards, but we can combine these to work it out
 * If we create two arrays for forward and backwards height
 * We can take the min value - the real height and get the right num
 *
 * The way that we will calc those arrays are iterating through
 * Then taking the max between the prev value and the cur value
 * Before pushing it into the respective array
 */

function trap(height: number[]): number {
	const len = height.length;
	if (len === 0) return 0;
	let ans = 0;

	// fill so we can place values without weird array stuff happening
	const l = new Array(height.length).fill(0);
	const r = new Array(height.length).fill(0);

	// since we are using the prev value in the loop we will get it started
	l[0] = height[0];
	for (let i = 1; i < len; i++) {
		// take the largest value between the prev l and cur height
		l[i] = Math.max(height[i], l[i - 1]);
	}

	// same with the right, but backwards
	r[len - 1] = height[len - 1];
	for (let i = len - 2; i >= 0; i--) {
		r[i] = Math.max(height[i], r[i + 1]);
	}

	// then we will actually calc the ans
	for (let i = 0; i < len; i++) {
		// we need to sub the real height by min value in r and l
		ans += Math.min(r[i], l[i]) - height[i];
	}

	return ans;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log(trap([4, 2, 0, 3, 2, 5]));

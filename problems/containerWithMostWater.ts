/**
 * Taking two pointers and narrowing to the middle based on which side has the largest value.
 * You always want to keep the highest value since it adds move space.
 * Set the max to the maximum between the current max and the area with the values.
 */

function maxArea(height: number[]): number {
	let r = height.length - 1;
	let l = 0;
	let max = 0;

	while (l < r) {
		const rVal = height[r];
		let lVal = height[l];

		const newMax = Math.min(rVal, lVal) * (r - l);
		max = Math.max(max, newMax);

		if (rVal > lVal) l++;
		else r--;
	}

	return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));

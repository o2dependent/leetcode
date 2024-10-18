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

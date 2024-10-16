function minSubArrayLen(target: number, nums: number[]): number {
	let l = 0;
	let r = 0;
	let cur = 0;
	let minLen = -1;

	while (r < nums.length) {
		cur += nums[r];

		while (cur >= target && l <= r) {
			cur -= nums[l];
			const newMin = r - l + 1;
			minLen = minLen === -1 ? newMin : Math.min(minLen, newMin);
			l++;
		}

		r++;
	}

	return minLen === -1 ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

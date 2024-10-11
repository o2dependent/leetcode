const solution = (nums: number[]) => {
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		const val = nums[i];
		// if the val - 1 is not there assume it is the max in the set
		if (!nums?.includes(val - 1)) {
			let c = 1;
			// check out all the ones ahead
			while (nums.includes(val + c)) {
				c++;
			}
			count = Math.max(count, c);
		}
	}
	return count;
};

console.log(solution([10, 4, 20, 1, 3, 2]));

function missingNumber(nums: number[]): number {
	nums.sort((a, b) => a - b);
	let a = 0;

	while (nums.length) {
		if (nums[a] !== a) break;
		a++;
	}

	return a;
}

console.log(missingNumber([3, 0, 1]));

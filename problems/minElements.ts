function minElements(nums: number[], limit: number, goal: number): number {
	const arrSum = nums.reduce((v, acc) => acc + v, 0);
	return Math.ceil((arrSum - goal) / limit);
}

console.log(minElements([1, -1, 1], 3, -4));
console.log(minElements([1, -10, 9, 1], 100, 0));

function combinationSum(candidates: number[], target: number): number[][] {
	const answer: number[][] = [];
	const rec = (i: number, total: number, nums: number[]) => {
		if (total === target) {
			answer.push(nums);
			return;
		}
		if (total > target) return;
		if (i > candidates.length - 1) return;

		rec(i, total + candidates[i], [...nums, candidates[i]]);
		rec(i + 1, total, nums);
	};

	rec(0, 0, []);

	return answer;
}

console.log(combinationSum([2, 3, 6, 7], 7));

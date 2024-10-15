function combinationSum2(candidates: number[], target: number): number[][] {
	const map = new Map();
	const answer: number[][] = [];
	candidates.sort();

	const rec = (i: number, total: number, nums: number[]) => {
		if (total === target && !map.get(nums.toString())) {
			answer.push(nums);
			map.set(nums.toString(), true);
			return;
		}
		if (total > target) return;
		if (i > candidates.length - 1) return;

		// keep it going
		rec(i + 1, total + candidates[i], [...nums, candidates[i]]);

		// skip this number all together
		let newI = i + 1;
		while (candidates[i] === candidates[newI]) {
			newI++;
		}
		rec(newI, total, nums);
	};
	rec(0, 0, []);

	return answer;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

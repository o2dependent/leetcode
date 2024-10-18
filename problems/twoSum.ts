import { analyzePerformance } from "../utils/analyzePerformance";

const twoSumInteresting = (nums: number[], target: number): number[] => {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
		else map.set(nums[i], i);
	}
	return [];
};

const twoSum = (nums: number[], target: number): number[] => {
	for (let i = 0; i < nums.length; i++) {
		const val1 = nums[i];
		for (let j = 0; j < nums.length - i - 1; j++) {
			const val2 = nums[i + j + 1];
			if (val1 + val2 === target) return [i, j + i + 1];
		}
	}
	return [];
};

analyzePerformance(() => twoSum([2, 7, 11, 15], 9));
analyzePerformance(() => twoSumInteresting([2, 7, 11, 15], 9));

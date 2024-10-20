import { analyzePerformance } from "../utils/analyzePerformance";

function twoSum(nums: number[], target: number): number[] {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const val1 = nums[i];
		// check if the number we need is here and return indices if true
		if (map.has(target - val1)) return [map.get(target - val1), i];
		// otherwise lets set that value to the current index
		else map.set(val1, i);
	}
	return [];
}

const BRUTEtwoSum = (nums: number[], target: number): number[] => {
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
analyzePerformance(() => BRUTEtwoSum([2, 7, 11, 15], 9));

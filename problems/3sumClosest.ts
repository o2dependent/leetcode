/**
 * Glad I used `target` instead of `0` for the "3sum" problem. Just kinda nice.
 */

const distanceBetween = (a: number, b: number): number => Math.abs(a - b);

function threeSumClosest(nums: number[], target: number): number {
	nums.sort((a, b) => a - b);
	let res: number[] = [];
	let closestSum = Infinity;

	for (let i = 0; i < nums.length; i++) {
		const num1 = nums[i];
		if (num1 === nums?.[i - 1]) continue;
		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			// skip repeats
			if (l !== i + 1 && nums[l] === nums?.[l - 1]) {
				l++;
				continue;
			}
			if (nums[r] === nums?.[r + 1]) {
				r--;
				continue;
			}

			const curSum = num1 + nums[l] + nums[r];

			// check if the current dist
			if (
				distanceBetween(curSum, target) < distanceBetween(closestSum, target)
			) {
				res = [num1, nums[l], nums[r]];
				closestSum = curSum;
			}

			if (curSum < target) l++;
			else if (curSum > target) r--;
			else l++;
		}
	}

	return closestSum;
}

// console.log(distanceBetween(-3, 1));
console.log(threeSumClosest([-1, 2, 1, -4], 1));

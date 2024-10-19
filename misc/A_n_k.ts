/**
 * Translated from python.
 * https://medium.com/algorithms-and-leetcode/backtracking-e001561b9f28
 * Brushing up on backtracking
 */

const A_n_k = (
	a: number[],
	n: number,
	k: number,
	depth: number,
	used: boolean[],
	curr: number[],
	ans: number[][],
) => {
	if (depth === k) {
		ans.push([...curr]);
		return;
	}

	for (let i = 0; i < n; i++) {
		if (!used?.[i]) {
			curr.push(a[i]);
			used[i] = true;
			console.log(curr);

			A_n_k(a, n, k, depth + 1, used, curr, ans);

			curr.pop();
			console.log(`backtrack: ${curr}`);
			used[i] = false;
		}
	}
	return;
};

const a = [1, 2, 3];
A_n_k(a, a.length, a.length, 0, [], [], []);

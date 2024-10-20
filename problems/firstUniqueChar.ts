/**
 * Solved this in legit a minute after reading the prompt.
 * Feels good after the number to words problem that just sucked.
 */

function firstUniqChar(s: string): number {
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		map.set(s[i], (map.get(s[i]) || 0) + 1);
	}

	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === 1) return i;
	}
	return -1;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));

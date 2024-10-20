/**
 * Sorting the string was the right move.
 * First I tried not to due to concerns of it being slow, but I was just being dumb.
 * Using a map and setting the key to the sorted letters made search immediate and iterating easy.
 * As a side not using for (let [key, value] of map) is neat and I like that syntax.
 */

function groupAnagrams(strs: string[]): string[][] {
	const map = new Map<any, string[]>();
	while (strs.length) {
		const val1 = strs.pop();
		if (val1 === undefined) continue;
		// check if there is anything to check so we can get started
		const key = val1.split("").sort().join("");
		map.set(key, [...(map.get(key) ?? []), val1]);
	}

	const res: string[][] = [];
	for (let [key, value] of map) {
		res.push(value);
	}

	return res;
}

let a = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(a);
console.log(
	a.toString() === [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]].toString(),
);

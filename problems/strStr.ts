/**
 * Watched a NeetCode video where he said this is one of the hardest.
 * Knowing Boyer-Moore algo it was a breeze though.
 */

const preproccess = (needle: string) => {
	const map = new Map();

	for (let i = 0; i < needle.length; i++) {
		// set the value to the index of the char in reverse order
		// this is to set how many you are skipping
		map.set(needle[i], needle.length - 1 - i);
	}

	return map;
};

function strStr(haystack: string, needle: string): number {
	const badMap = preproccess(needle);

	let i = 0;
	while (i <= haystack.length - needle.length) {
		let j = 0;
		while (haystack[i + j] === needle[j]) {
			if (j === needle.length - 1) return i;
			j++;
		}
		const badMapInc = badMap?.get?.(haystack[i + needle.length - 1]);
		if (badMapInc) i += badMapInc;
		else i++;
	}

	return -1;
}

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("madbutsad", "sad"));
console.log(strStr("aabaaabaaac", "aabaaac"));

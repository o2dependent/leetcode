function mostCommonWord(paragraph: string, banned: string[]): string {
	const map = new Map();

	const words = paragraph.split(/[\W]/);
	let cur = words[0];
	for (let word of words) {
		if (!word) continue;
		word = word.toLowerCase();
		if (banned.includes(word)) continue;
		const val = (map.get(word) || 0) + 1;
		map.set(word, val);
		if (val > (map.get(cur) || 0)) cur = word;
	}
	return cur;
}

console.log(
	mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
		"hit",
	]),
);

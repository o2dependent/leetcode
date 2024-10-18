const lengthOfLongestSubstring = (s: string): number => {
	const have = new Map();
	let l = 0;
	let r = 0;
	let longest = 0;

	while (r < s.length) {
		const char = s[r];
		have.set(char, (have.get(char) || 0) + 1);

		while (have.get(char) > 1) {
			have.set(s[l], have.get(s[l] || 0) - 1);
			l++;
		}

		if (r - l + 1 > longest) longest = r - l + 1;

		r++;
	}

	return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

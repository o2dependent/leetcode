function longestPalindrome(s: string): string {
	let ans = "";

	for (let i = 0; i < s.length; i++) {
		// check odd
		let j = 0;
		while ((s?.[i - j] ?? "12") === (s?.[i + j] ?? "23")) {
			if (j * 2 + 1 > ans.length) {
				ans = s.substring(i - j, i + j + 1);
			}
			j++;
		}
		// // check even
		if (s?.[i + 1] === s?.[i]) {
			j = 0;
			while ((s?.[i - j] ?? "12") === (s?.[i + j + 1] ?? "23")) {
				if (j * 2 + 2 > ans.length) ans = s.substring(i - j, i + j + 2);
				j++;
			}
		}
	}

	return ans;
}

console.log(longestPalindrome("rtuibabad"));
console.log(longestPalindrome("cbbd"));

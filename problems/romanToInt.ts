function romanToInt(s: string): number {
	const numerals: [string, number][] = [
		["M", 1000],
		["D", 500],
		["C", 100],
		["L", 50],
		["X", 10],
		["V", 5],
		["I", 1],
	];
	let res = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		// find which numeral it is
		for (let j = 0; j < numerals.length; j++) {
			let val = numerals[j];

			// if char is the same as value then lets add it in
			if (val[0] === char) {
				let addNum = val[1];
				// first check if it is a 4 or 9 style numeral by checking the next
				// if it is skip the next by inc i
				let prev = numerals?.[j - 1];
				if (prev && (s?.[i + 1] ?? "") === prev?.[0]) {
					addNum = prev[1] - addNum;
					i++;
				}
				prev = numerals?.[j - 2];
				if (prev && (s?.[i + 1] ?? "") === prev?.[0]) {
					addNum = prev[1] - addNum;
					i++;
				}

				res += addNum;

				break;
			}
		}
	}

	return res;
}

console.log(romanToInt("IV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

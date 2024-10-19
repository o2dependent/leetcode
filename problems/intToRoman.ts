function intToRoman(num: number): string {
	const numerals: [string, number][] = [
		["M", 1000],
		["D", 500],
		["C", 100],
		["L", 50],
		["X", 10],
		["V", 5],
		["I", 1],
	];
	let res = "";

	while (num !== 0) {
		for (let i = 0; i < numerals.length; i++) {
			const [numeral, value] = numerals[i];
			if (num - value >= 0) {
				num -= value;
				res += numeral;
				const prevNumeral = numerals?.[i - 1]?.[0];
				if (res.substring(res.length - 4) === numeral.repeat(4)) {
					res = res.substring(0, res.length - 4) + numeral + prevNumeral;
				}
				const prevPrevNumeral = numerals?.[i - 2]?.[0];
				if (
					prevNumeral &&
					prevPrevNumeral &&
					res.substring(res.length - 3) === prevNumeral + numeral + prevNumeral
				) {
					res = res.substring(0, res.length - 3) + numeral + prevPrevNumeral;
				}
				break;
			}
		}
	}

	return res;
}

console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(1998));
console.log(intToRoman(3749)); // MMMDCCXLIX

function myAtoi(s: string): number {
	let neg = 1;
	let num = 0;

	for (let i = 0; i < s.length; i++) {
		const val = s[i];
		if (val === " ") continue;
		else if (val === "-" || val === "+") neg = val === "-" ? -1 : 1;
		else if (/[0-9]/.test(val)) {
			num = num * 10;
			num += +val;
		} else break;

		if (!/[0-9]/.test(s[i + 1])) break;
	}
	return Math.max(-1 * 2 ** 31, Math.min(num * neg, 2 ** 31 - 1));
}

console.log(myAtoi("   -042")); // -42
console.log(myAtoi("1337c0d3")); // 1337
console.log(myAtoi("0-1")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("+1")); // 1
console.log(myAtoi(".1")); // 0

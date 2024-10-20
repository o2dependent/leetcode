/**
 * Overdid the hell out of this and had to just look up how to do it easily without a ton of code
 * It isn't difficult, but it is annoying to get to a solution that is readable and works
 */

const NUMBERS = new Map([
	[1e9, "Billion"],
	[1e6, "Million"],
	[1e3, "Thousand"],
	[1e2, "Hundred"],
	[90, "Ninety"],
	[80, "Eighty"],
	[70, "Seventy"],
	[60, "Sixty"],
	[50, "Fifty"],
	[40, "Forty"],
	[30, "Thirty"],
	[20, "Twenty"],
	[19, "Nineteen"],
	[18, "Eighteen"],
	[17, "Seventeen"],
	[16, "Sixteen"],
	[15, "Fifteen"],
	[14, "Fourteen"],
	[13, "Thirteen"],
	[12, "Twelve"],
	[11, "Eleven"],
	[10, "Ten"],
	[9, "Nine"],
	[8, "Eight"],
	[7, "Seven"],
	[6, "Six"],
	[5, "Five"],
	[4, "Four"],
	[3, "Three"],
	[2, "Two"],
	[1, "One"],
	[0, "Zero"],
]);

function numberToWords(num: number): string {
	for (const [val, text] of NUMBERS) {
		// if the number is this big lets go
		if (num >= val) {
			// get all of the components of the output
			// forgot trunc existed so that's neat
			// recursively go through to get prefixed values
			const pre = num >= 100 ? numberToWords(Math.trunc(num / val)) : "";
			// recursively go through to get end values
			const suf = num % val > 0 ? numberToWords(num % val) : "";
			return `${pre} ${text} ${suf}`.trim();
		}
	}
	return "";
}

// console.log(numberToWords(1));
// console.log(numberToWords(12));
console.log(numberToWords(123));
// console.log(numberToWords(100));
// console.log(numberToWords(1000));
// console.log(numberToWords(1010));
// console.log(numberToWords(1_234_567));
// console.log(numberToWords(12_345_678));
// console.log(numberToWords(412_345_678));

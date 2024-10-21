/**
 * This one is frustrating purely due to me not being able to effectively track when something went wrong.
 * I need to practice sorting more in general especially with custom use cases like this.
 */

function reorderLogFiles(logs: string[]): string[] {
	const firstWhitespace = (s: string) => s.indexOf(" ");
	return logs.sort((a, b) => {
		const [startA, valsA] = [
			a.slice(0, firstWhitespace(a)),
			a.slice(firstWhitespace(a) + 1),
		];
		const [startB, valsB] = [
			b.slice(0, firstWhitespace(b) + 1).trimEnd(),
			b.slice(firstWhitespace(b) + 1),
		];

		// letter
		const aIsLetter = Number.isNaN(parseInt(valsA?.[0]));
		const bIsLetter = Number.isNaN(parseInt(valsB?.[0]));

		// sort based on type (letter | number)
		if (aIsLetter && !bIsLetter) return -1;
		else if (!aIsLetter && bIsLetter) return 1;
		else if (!aIsLetter && !bIsLetter) return 0; // if both are digits

		if (valsA < valsB) return -1;
		else if (valsA > valsB) return 1;
		else {
			if (startA < startB) return -1;
			else if (startA > startB) return 1;
			return 0;
		}
	});
}

console.log(
	reorderLogFiles([
		"dig1 8 1 5 1",
		"let1 art can",
		"dig2 3 6",
		"let2 own kit dig",
		"let3 art zero",
	]),
);
console.log(reorderLogFiles(["1 n u", "r 527", "j 893", "6 14", "6 82"]));
// console.log(
// 	reorderLogFiles([
// 		"a1 9 2 3 1",
// 		"g1 act car",
// 		"zo4 4 7",
// 		"ab1 off key dog",
// 		"a8 act zoo",
// 	]),
// );

import { analyzePerformance } from "../utils/analyzePerformance";

const preprocess = (search: string) => {
	const map = new Map();

	for (let i = search.length; i >= 0; i--) {
		map.set(search[i], search.length - 1 - i);
	}

	return map;
};

const boyerMoore = (str: string, search: string): number => {
	const badMap = preprocess(search);

	let a = -1;
	let i = 0;

	while (i < str.length) {
		let cur = 0;
		console.log(i);
		while (str[cur + i] === search[cur]) {
			if (cur === search.length - 1) return i;
			cur++;
		}

		if (badMap.has(str[i])) i += badMap.get(str[i]);
		else i++;
	}
	return 0;
};

let str = "THIS IS A TEST TEXT";
let pattern = "TEST";
let result = analyzePerformance(() => boyerMoore(str, pattern));
console.log(str.substring(result, result + pattern.length));

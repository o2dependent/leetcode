const stripLeadingZeros = (s: string) => {
	while (s[0] === "0" && s.length > 1) {
		s = s.substring(1);
	}
	return s;
};

function compareVersion(version1: string, version2: string): number {
	const v1 = version1.split(".");
	const v2 = version2.split(".");

	let i = 0;
	while (i < v1.length || i < v2.length) {
		const val1 = parseInt(stripLeadingZeros(v1?.[i] ?? "0"));
		const val2 = parseInt(stripLeadingZeros(v2?.[i] ?? "0"));
		if (val1 > val2) return 1;
		else if (val1 < val2) return -1;
		i++;
	}

	return 0;
}

console.log(compareVersion("1.2", "1.10"));

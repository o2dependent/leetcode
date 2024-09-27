function spiralOrder(matrix: number[][]): number[] {
	let xLimit = [-1, matrix?.[0]?.length];
	let yLimit = [-1, matrix?.length];
	let x = 0;
	let y = 0;

	const output: number[] = [];
	let vecDir: "x" | "y" = "x";
	let dir: -1 | 1 = 1;

	let count = 0;
	while (count <= matrix?.length * matrix[0]?.length - 1) {
		// grab the current x and y value from matrix and push
		const val = matrix[y][x];
		output.push(val);
		if (vecDir === "x") {
			// if boundary is exceed with next move change vec and set new boundary
			if (x + dir <= xLimit[0] || x + dir >= xLimit[1]) {
				vecDir = "y";
				yLimit[dir === 1 ? 0 : 1] = y;
				y += dir;
			} else x += dir;
		} else {
			// y
			// if boundary is exceed with next move change vec and set new boundary
			if (y + dir <= yLimit[0] || y + dir >= yLimit[1]) {
				vecDir = "x";
				xLimit[dir === 1 ? 1 : 0] = x;
				dir = dir * -1;
				x += dir;
			} else y += dir;
		}
		count++;
	}

	return output;
}

console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
);
console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	]),
);

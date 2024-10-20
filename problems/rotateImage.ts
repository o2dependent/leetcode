/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
	let n = matrix.length;

	for (let x = 0; x < Math.floor(matrix.length / 2); x++) {
		for (let i = x; i < n - 1 - x; i++) {
			const top = matrix[x][i]; // top
			const right = matrix[i][n - 1 - x]; // right
			const left = matrix[n - 1 - i][x]; // left
			const bottom = matrix[n - 1 - x][n - 1 - i]; // bottom

			matrix[x][i] = left; // top
			matrix[i][n - 1 - x] = top; // right
			matrix[n - 1 - i][x] = bottom; // left
			matrix[n - 1 - x][n - 1 - i] = right; // bottom
		}
	}
}

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
matrix.forEach((v) => console.log(v));
rotate(matrix);
console.log(`-------------`);
matrix.forEach((v) => console.log(v));
console.log(
	matrix.toString() ===
		[
			[7, 4, 1],
			[8, 5, 2],
			[9, 6, 3],
		].toString(),
);

console.log(`////////////////`);

matrix = [
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
];
matrix.forEach((v) => console.log(v));
rotate(matrix);
console.log(`-------------`);
matrix.forEach((v) => console.log(v));
console.log(
	matrix.toString() ===
		[
			[15, 13, 2, 5],
			[14, 3, 4, 1],
			[12, 6, 8, 9],
			[16, 7, 10, 11],
		].toString(),
);

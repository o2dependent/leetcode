// function numIslands(grid: string[][]): number {
// 	const map = new Map();
// 	const m = grid?.length ?? 0;
// 	const n = grid?.[0]?.length ?? 0;
// 	const islandChar = "1";
// 	const waterChar = "0";

// 	const findIsland = (i: number, j: number) => {
// 		if (map.get(`${i}-${j}`) || grid?.[i]?.[j] !== islandChar) return 0;
// 		map.set(`${i}-${j}`, true);
// 		// check directions
// 		findIsland(i + 1, j);
// 		findIsland(i - 1, j);
// 		findIsland(i, j + 1);
// 		findIsland(i, j - 1);
// 		return 1;
// 	};

// 	let numIslands = 0;

// 	for (let i = 0; i < m; i++) {
// 		for (let j = 0; j < n; j++) {
// 			numIslands += findIsland(i, j);
// 		}
// 	}
// 	return numIslands;
// }

/**
 * Removed visited map for mutating original array
 */
function numIslands(grid: string[][]): number {
	const m = grid?.length ?? 0;
	const n = grid?.[0]?.length ?? 0;
	const islandChar = "1";
	const waterChar = "0";
	const visitedChar = "V";

	const findIsland = (i: number, j: number) => {
		if (grid?.[i]?.[j] !== islandChar) return 0;
		grid[i][j] = visitedChar;
		// check directions
		findIsland(i + 1, j);
		findIsland(i - 1, j);
		findIsland(i, j + 1);
		findIsland(i, j - 1);
		return 1;
	};

	let numIslands = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			numIslands += findIsland(i, j);
		}
	}
	return numIslands;
}

console.log(
	numIslands([
		["1", "1", "1", "1", "0"],
		["1", "1", "0", "1", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "0", "0", "0"],
	]),
);

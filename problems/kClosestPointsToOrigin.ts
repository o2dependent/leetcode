const distanceToOrigin = (point: number[]): number => {
	return Math.sqrt(point[0] ** 2 + point[1] ** 2);
};

function kClosest(points: number[][], k: number): number[][] {
	points.sort((a, b) => distanceToOrigin(a) - distanceToOrigin(b));
	return points.slice(0, k);
}

console.log(
	kClosest(
		[
			[1, 3],
			[-2, 2],
		],
		1,
	),
);
console.log(
	kClosest(
		[
			[3, 3],
			[5, -1],
			[-2, 4],
		],
		2,
	),
);

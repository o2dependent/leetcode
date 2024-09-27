class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	const queue: (typeof p)[][] = [[p, q]];

	while (queue.length) {
		const item = queue.shift();
		if (!item) return true;
		const [a, b] = item;
		if (a?.val !== b?.val) return false;

		if (a?.left || b?.left) queue.push([a?.left ?? null, b?.left ?? null]);
		if (a?.right || b?.right) queue.push([a?.right ?? null, b?.right ?? null]);
	}

	return true;
}
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
// 	if (p?.val !== q?.val) return false;
// 	let leftSame = true;
// 	let rightSame = true;
// 	if (p?.left && q?.left) leftSame = isSameTree(p?.left, q?.left);
// 	if (p?.right && q?.right) rightSame = isSameTree(p?.right, q?.right);
// 	console.log(p?.val, q?.val);
// 	console.log(leftSame, rightSame);
// 	return leftSame && rightSame;
// }

const parent1 = new TreeNode(1);
const left1 = new TreeNode(2);
const right1 = new TreeNode(3);
parent1.left = left1;
parent1.right = right1;
const parent2 = new TreeNode(1);
const left2 = new TreeNode(2);
const right2 = new TreeNode(3);
parent2.left = left2;
parent2.right = right2;

console.log(isSameTree(parent1, parent2));

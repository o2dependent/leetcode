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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];
	const ans = [] as number[][];
	const q = [root];
	let leftFirst = false;
	let level = 0;

	while (q.length) {
		const len = q.length;
		let v = null as null | number;
		let values = [] as number[];
		for (let i = 0; i < len; i++) {
			const node = q.shift();
			if (node) {
				if (node.right) q.push(node.right);
				if (node.left) q.push(node.left);
				values.push(node.val);
			}
		}
		ans.push(level % 2 === 0 ? values.reverse() : values);
		level++;
	}
	return ans;
}

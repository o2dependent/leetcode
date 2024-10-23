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

function isValidBST(
	root: TreeNode | null,
	bounds: [number, number] = [-Infinity, Infinity],
): boolean {
	if (!root) return true;

	// if the cur node does not fit in bounds it isn't valid
	if (!(root.val > bounds[0] && root.val < bounds[1])) return false;

	// check the left and right while updating bounds
	return (
		isValidBST(root.left, [bounds[0], root.val]) &&
		isValidBST(root.right, [root.val, bounds[1]])
	);
}

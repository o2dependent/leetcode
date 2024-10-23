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

// DFS
function maxDepth(root: TreeNode | null): number {
	if (!root) return 0;

	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// BFS
// function maxDepth(root: TreeNode | null): number {
//     if (!root) return 0
//     const q = [root] as TreeNode[]
//     let ans = 0

//     while(q.length) {
//         const len = q.length
//         for (let i = 0; i < len; i++) {
//             const node = q.shift()
//             if (node.right) q.push(node.right)
//             if (node.left) q.push(node.left)
//         }
//         ans += 1
//     }
//     return ans
// }

// iterative BFS
// function maxDepth(root: TreeNode | null): number {
//     if (!root) return 0

//     const stack = [[root, 1]] as [TreeNode | null, number][]
//     let ans = 0
//     while (stack.length) {
//         const [node, depth] = stack.pop()

//         if (node) {
//             ans = Math.max(ans, depth)
//             stack.push([node.right, depth + 1])
//             stack.push([node.left, depth + 1])
//         }
//     }

//     return ans
// }

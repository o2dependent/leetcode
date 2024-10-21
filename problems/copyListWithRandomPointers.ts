class _Node {
	val: number;
	next: _Node | null;
	random: _Node | null;
	copy = false;

	constructor(val?: number, next?: _Node, random?: _Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

function copyRandomList(head: _Node | null): _Node | null {
	// iterate over list and interweave copies
	let node = head;
	while (node) {
		const newNode = new _Node(node.val, node?.next!, node?.random!);
		node.next = newNode;
		node = newNode.next;
	}

	// set the randoms
	node = head;
	while (node) {
		node.next!.random = node?.random?.next ?? null;
		node = node?.next?.next ?? null;
	}

	// save head for return
	const copyHead = head?.next ?? null;

	// iterate over list and fix the copies
	let oldNode = head;
	let copyNode = head?.next;
	while (oldNode) {
		// [real, copy, real, copy, real, copy]
		// const copy = node.next!;
		// const nextReal = copy?.next! ?? null;
		// node.next = nextReal;
		// copy.next = nextReal?.next!;
		// THIS WAS GOING WRONG SINCE THE POINTER IS RANDOM I NEED TO BREAK IT UP
		// BAD BRAIN NO WORK GOOD
		// copy.random = copy?.random?.next!;
		// node = nextReal;

		oldNode.next = oldNode.next?.next ?? null;
		copyNode!.next = copyNode?.next?.next ?? null;
		// since we've already changed next just use that
		oldNode = oldNode?.next ?? null;
		copyNode = copyNode?.next ?? null;
	}
	return copyHead;
}

const makeList = (arr: number[], randIdx: number[]) => {
	let node: _Node | undefined;
	const nodes = [] as _Node[];
	for (let i = arr.length - 1; i >= 0; i--) {
		node = new _Node(arr[i], node);
		nodes.push(node);
	}
	nodes.reverse();
	for (let i = 0; i < randIdx.length; i++) {
		nodes[i].random = nodes[randIdx[i]];
	}
	return node;
};

let list = makeList([1, 2, 3, 4, 5], [1, 4, 0, 3, 2])!;
let res = copyRandomList(list);
while (res) {
	console.log(res.val, res.random?.val, res.copy);
	res = res.next;
}

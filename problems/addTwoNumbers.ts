class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	if (l1 === null || l2 === null) return null;

	let sum: number[] = [];
	let i = 0;
	let hasNext = true;
	const parent = new ListNode();
	let node = parent;

	while (hasNext) {
		const newNode = new ListNode();
		const valSum = (l1?.val ?? 0) + (l2?.val ?? 0) + (node?.val ?? 0);
		node.val = valSum % 10;

		if (valSum / 10 >= 1) newNode.val = Math.floor(valSum / 10);

		l1 = l1?.next ?? null;
		l2 = l2?.next ?? null;

		if (l1 === null && l2 === null) hasNext = false;

		node.next = newNode;
		if (hasNext) node = newNode;
		i++;
	}
	if (!node.next?.val) node.next = null;

	return parent;
}

const toListNode = (sum: number[]): ListNode => {
	const val = sum[0];
	let next = null;
	if (sum.length > 1) {
		next = toListNode(sum.slice(1));
	}
	const node = new ListNode(val, next);

	return node;
};

const INIT_toListNode = (num: number): ListNode => {
	const str = num.toString();
	const val = parseInt(str[str.length - 1]);
	let next = null;
	if (str.length > 1) {
		next = INIT_toListNode(parseInt(str.substring(0, str.length - 1)));
	}
	const node = new ListNode(val, next);

	return node;
};

const unwrapListNode = (node: ListNode | null): number[] => {
	const arr = [];

	while ((node?.val ?? null) !== null) {
		if (typeof node?.val === "number") arr.push(node?.val);
		node = node?.next ?? null;
	}

	return arr;
};

console.log(
	unwrapListNode(
		addTwoNumbers(INIT_toListNode(9_999_999), INIT_toListNode(9_999)),
	),
);
console.log(
	unwrapListNode(addTwoNumbers(INIT_toListNode(564), INIT_toListNode(243))),
);

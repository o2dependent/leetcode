class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function reverseList(head: ListNode | null): ListNode | null {
	let cur = head;
	let prev = null;

	while (cur) {
		const n = cur?.next;
		cur.next = prev;
		prev = cur;
		cur = n;
	}
	return prev;
}

const makeList = (arr: number[]) => {
	let node: ListNode | undefined;
	for (let i = arr.length - 1; i >= 0; i--) {
		node = new ListNode(arr[i], node);
	}
	return node;
};

let res = reverseList(makeList([1, 2, 3, 4, 5])!);
while (res) {
	console.log(res.val);
	res = res.next;
}

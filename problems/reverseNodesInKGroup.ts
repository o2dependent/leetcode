/**
 *
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	// start with a dummy to keep track of where it starts
	const dummy = new ListNode(0, head);
	// keep track of where the previous group is so the list isn't broken
	let gPrev = dummy;

	while (true) {
		const kth = getKth(gPrev, k);
		if (!kth) break;
		// keep track of the next group
		const gNext = kth.next;

		// reverse current group
		let prev = kth.next; // grab the next after the end
		let cur = gPrev.next; // grab the real start of this group
		while (cur !== gNext) {
			const n = cur?.next;
			if (cur) cur.next = prev;
			prev = cur;
			cur = n!;
		}

		const n = gPrev.next;
		gPrev.next = kth;
		gPrev = n!;
	}

	return dummy.next;
}

// this is to get the end node by k
const getKth = (cur: ListNode | null, k: number): ListNode | null => {
	// loop over till we reach the last or in the case of the end we get nothing
	while (cur && k > 0) {
		cur = cur.next;
		k--;
	}
	return cur;
};

const makeList = (arr: number[]) => {
	let node: ListNode | undefined;
	for (let i = arr.length - 1; i >= 0; i--) {
		node = new ListNode(arr[i], node);
	}
	return node;
};

let res = reverseKGroup(makeList([1, 2, 3, 4, 5])!, 2);
while (res) {
	console.log(res.val);
	res = res.next;
}

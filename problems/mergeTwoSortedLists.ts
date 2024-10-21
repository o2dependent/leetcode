/**
 *
 **/
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null,
): ListNode | null {
	if (!list1 && !list2) return null;
	if (list1 && !list2) return list1;
	if (!list1 && list2) return list2;

	const dummy = new ListNode();
	let tail = dummy;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			tail.next = list1;
			list1 = list1.next;
		} else {
			tail.next = list2;
			list2 = list2.next;
		}
		tail = tail.next;
	}

	// take the last one that will be left over
	if (list1) tail.next = list1;
	else if (list2) tail.next = list2;

	return dummy.next;
}

const makeList = (arr: number[]) => {
	let node: ListNode | undefined;
	for (let i = arr.length - 1; i >= 0; i--) {
		node = new ListNode(arr[i], node);
	}
	return node;
};

let res = mergeTwoLists(makeList([1, 2, 3])!, makeList([1, 2, 3])!);
while (res) {
	console.log(res.val);
	res = res.next;
}

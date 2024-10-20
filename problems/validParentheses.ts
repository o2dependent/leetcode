/**
 * Push and pop stack DS to make sure everything lines up properly.
 * I know there is a "longest valid parentheses" problem that this would be the base for
 * and I think for that you'd just wait for the stack to empty then update a "max" var.
 *
 * nvm to the above note. It doesn't use other parens ("{}", "[]") so this wouldn't be a great base
 */

const OPENING = new Map([
	["[", 1],
	["(", 2],
	["{", 3],
]);
const CLOSING = new Map([
	["]", 1],
	[")", 2],
	["}", 3],
]);

function isValid(s: string): boolean {
	const stack: string[] = [];

	for (let i = 0; i < s.length; i++) {
		const val = s[i];
		if (OPENING.get(val)) stack.push(val);
		else if (CLOSING.get(val)) {
			if (OPENING.get(stack?.pop() ?? "") !== CLOSING.get(val)) return false;
		}
	}
	return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("([])"));

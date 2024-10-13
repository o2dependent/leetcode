const cardNumbers = [
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
	"A",
] as const;
const cardSuits = ["S", "C", "H", "D"] as const;

type Card = `${(typeof cardNumbers)[number]}${(typeof cardSuits)[number]}`;

const ORDERED_DECK = new Array(cardNumbers.length * cardSuits.length)
	.fill(null)
	.map((_, i) => {
		const suit = cardSuits[i % cardSuits.length];
		const number = cardNumbers[i % cardNumbers.length];
		return `${number}${suit}` as Card;
	});

class Deck {
	cards: Card[];
	drawn: Card[];
	empty: boolean;
	numDecks: number;

	constructor(numDecks: number = 1) {
		this.numDecks = Math.max(1, numDecks);
		// fill deck
		this.cards = [];
		for (let i = 0; i < numDecks; i++) {
			this.cards = [...this.cards, ...ORDERED_DECK];
		}

		this.drawn = [];
		this.empty = false;
	}

	shuffle(withDrawn?: boolean): void {
		// add drawn cards if withDrawn
		let newCards = [] as Card[];
		if (withDrawn) newCards = [...newCards, ...this.drawn];
		else newCards = [...this.cards];

		// only remove drawn if withDrawn
		this.cards = [];
		if (withDrawn) this.drawn = [];

		while (newCards.length) {
			const k = Math.floor(Math.random() * newCards.length);
			this.cards.push(newCards?.[k]);
			newCards = [...newCards.slice(0, k), ...newCards.slice(k + 1)];
		}
	}

	draw(num: number = 1): (Card | undefined)[] {
		let cards = [] as (Card | undefined)[];
		for (let i = 0; i < num; i++) {
			const card = this.cards.pop();
			if (card) this.drawn.push(card);
			else this.empty = true;
			cards.push(card);
		}
		return cards;
	}
}

const deck = new Deck(1);
deck.shuffle();

console.log(`player 1 - ${deck.draw(2)}`);
console.log(`player 2 - ${deck.draw(2)}`);
console.log(`player 3 - ${deck.draw(2)}`);
console.log(`dealer   - ${deck.draw(52)}`);

function maxProfit(prices: number[]): number {
	let max = 0;
	let lowest = Infinity;
	for (let i = 0; i < prices.length; i++) {
		lowest = Math.min(lowest, prices[i]);
		max = Math.max(prices[i] - lowest, max);
	}
	return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

let count = 0;

export const analyzePerformance = (fun: () => any): any => {
	const t0 = performance.now();
	const result = fun();
	const t1 = performance.now();
	console.log(`performance ${count}: ${t1 - t0}ms`);
	count++;
	return result;
};

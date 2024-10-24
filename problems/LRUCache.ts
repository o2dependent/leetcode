class LRUCache {
	private capacity: number;
	private cache: Map<number, number>;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.cache = new Map();
	}

	get(key: number): number {
		if (this.cache.has(key)) {
			const val = this.cache.get(key) ?? -1;
			this.cache.delete(key);
			this.cache.set(key, val);
			return val;
		} else return -1;
	}

	put(key: number, value: number): void {
		if (this.cache.has(key)) this.cache.delete(key);
		this.cache.set(key, value);
		if (this.cache.size > this.capacity) {
			const firstKey = this.cache.keys()?.next?.()?.value ?? null;
			if (firstKey !== null) this.cache.delete(firstKey);
		}
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

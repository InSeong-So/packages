declare function sleep(ms: number): Promise<void>;
declare function unless<T>(predicate: boolean, callback: (...args: unknown[]) => T | void): T | void;
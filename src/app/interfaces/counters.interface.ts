export interface CountersState {
    counters: Record<string, Counter>;
}

export interface CountersData {
    counters: Counter[];
}

export interface Counter {
    id: string;
    title: string;
    currentCount: number;
}

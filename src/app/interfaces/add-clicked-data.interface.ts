import { Counter } from "./counters.interface";

export interface CountChange {
  counter: Counter;
  newCount: number;
}

export interface CountChangeData {
  currentCount: number;
}

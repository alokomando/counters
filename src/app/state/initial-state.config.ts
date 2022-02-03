import { CountersState } from "../interfaces/counters.interface";

export const CountersInitialState: CountersState = {
    counters: {
      counter1: {
        id: 'counter1',
        title: 'Twitter',
        currentCount: 0,
      },
      counter2: {
        id: 'counter2',
        title: 'Instagram',
        currentCount: 0,
      },
    },
};
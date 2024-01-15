//most basic store in zustand
//this used keywords reused in REACT, very important
//in zustand, store, we use custom hook in react Comp.

import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

//for update the new value, we have to use 'set' function
export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,//return an initial state of the store
    increment: () => {
        //give a new state
        set({count: 1});
    },
    decrement: () => {
        set({count: -1});
    },
}));
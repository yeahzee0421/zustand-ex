//most basic store in zustand
//this used keywords reused in REACT, very important
//in zustand, store, we use custom hook in react Comp.

import { resolve } from "path";
import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void;
};

//for update the new value, we have to use 'set' function
//But, it doesn't have to be a custom hook.
//When use it outside of the component, and access directly in just any random function.
export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,//return an initial state of the store
    increment: () => {
        //give a new state
        set((state) => ({count: state.count + 1}));
    },
    incrementAsync:async () => {
        const res = await new Promise((resolve) => setTimeout(resolve, 100));
        set((state) => ({count: state.count + 1}));
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}));
    },
}));
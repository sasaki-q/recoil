import { atom, selector } from "recoil";

export const counterState = atom<number>({
    key: "counter",
    default: 0,
})

export const counterLabelState = selector({
    key: "counterLabel",
    get: ({get}) => get(counterState).toString(),
})
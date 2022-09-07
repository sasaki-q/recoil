import { 
    atom, 
    selector, 
    SetterOrUpdater 
} from "recoil";

type Action = "increment" | "decrement"

export const counterState = atom<number>({
    key: "counter",
    default: 0,
})

export const counterLabelState = selector({
    key: "counterLabel",
    get: ({get}) => get(counterState).toString(),
})

export const counterRecoilAction = (
    action: Action,
    updater: SetterOrUpdater<number>,
) => {
    const options: {[key in Action]: () => void} = {
        "increment": () => updater((e) => e = e + 1),
        "decrement": () => updater((e) => e = e - 1),
    }
    
    return options[action]()
}
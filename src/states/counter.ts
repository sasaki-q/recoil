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
    switch(action) {
        case "increment":
            return updater((e) => e = e + 1)

        case "decrement":
            return updater((e) => e = e - 1)
    }
}
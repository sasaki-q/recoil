import { FunctionComponent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { 
    counterState,
    counterLabelState, 
    counterRecoilAction 
} from "@/states/counter";

export const Counter: FunctionComponent = () => {
    const [counter, setCounter] = useRecoilState(counterState)
    const label = useRecoilValue(counterLabelState)

    const handler = () => counterRecoilAction(
        counter > 2 ? "decrement" : "increment",
        setCounter,
    )

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <button
                className="bg-blue-500 h-10 w-20 text-white"
                onClick={handler}
            >
                {label}
            </button>
        </div>
    )
}
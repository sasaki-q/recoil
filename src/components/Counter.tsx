import { FunctionComponent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterLabelState, counterState } from "@/states/counter";

export const Counter: FunctionComponent = () => {
    const [_, setCounter ] = useRecoilState(counterState)
    const label = useRecoilValue(counterLabelState)

    const handler = () => setCounter((e) => e = e + 1)

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
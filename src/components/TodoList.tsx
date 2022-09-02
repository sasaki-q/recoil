import { FunctionComponent } from "react"

type Props = {
    name: string
}

export const TodoList: FunctionComponent<Props> = ({name}) => {
    return <div>{name}</div>
}
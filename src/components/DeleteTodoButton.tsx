import { MouseEventHandler } from 'react'
import { MdDelete } from 'react-icons/md'

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const DeleteTodoButton = ({ onClick }: Props) => {
    return (
        <>
            <button onClick={onClick} className="button button-primary">
                <MdDelete />
            </button>
        </>
    )
}

import { MdDelete } from 'react-icons/md'

type Props = {
    deleteEvent: React.MouseEventHandler<HTMLButtonElement>
}

export const DeleteTodoButton = ({ deleteEvent }: Props) => {
    return (
        <>
            <button onClick={deleteEvent} className="button button-primary">
                <MdDelete />
            </button>
        </>
    )
}

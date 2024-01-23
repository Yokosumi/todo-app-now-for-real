import { MdDelete } from 'react-icons/md'

type props = {
    deleteEvent: React.MouseEventHandler<HTMLButtonElement>
}

export const DeleteTodoButton = ({ deleteEvent }: props) => {
    return (
        <>
            <button
                onClick={deleteEvent}
                className="button button-primary hover:text-red-500"
            >
                <MdDelete />
            </button>
        </>
    )
}

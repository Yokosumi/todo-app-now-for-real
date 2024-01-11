import { MdEdit } from 'react-icons/md'

type props = {
    editEvent: React.MouseEventHandler<HTMLButtonElement>
}

export const EditTodoButton = ({ editEvent }: props) => {
    return (
        <>
            <button onClick={editEvent}>
                <MdEdit />
            </button>
        </>
    )
}

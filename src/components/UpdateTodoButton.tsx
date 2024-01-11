import { FaSave } from 'react-icons/fa'

type props = {
    updateEvent: React.MouseEventHandler<HTMLButtonElement>
}

export const UpdateTodoButton = ({ updateEvent }: props) => {
    return (
        <>
            <button onClick={updateEvent} className="button button-primary">
                <FaSave />
            </button>
        </>
    )
}

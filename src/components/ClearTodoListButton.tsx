import { AiOutlineClear } from 'react-icons/ai'

type props = {
    onClick: () => void
}

export const ClearTodoListButton = ({ onClick }: props) => {
    return (
        <>
            <button onClick={onClick}>
                <AiOutlineClear className="text-white text-lg" />
            </button>
        </>
    )
}

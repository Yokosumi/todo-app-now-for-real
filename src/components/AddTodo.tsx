import { IoIosAdd } from 'react-icons/io'

type props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    onClick: () => void
    onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const AddTodo = ({ onChange, value, onClick, onKeydown }: props) => {
    return (
        <>
            <input
                className="bg-white p-2 w-full text-black"
                onChange={onChange}
                value={value}
                type="text"
                placeholder="Add Todo"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onKeydown(e)
                    }
                }}
            />
            <button onClick={onClick} className="button button-primary">
                <IoIosAdd className="text-3xl text-white" />
            </button>
        </>
    )
}

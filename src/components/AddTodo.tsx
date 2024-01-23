import { IoIosAdd } from 'react-icons/io'

type props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    onClick: () => void
}

export const AddTodo = ({ onChange, value, onClick }: props) => {
    return (
        <>
            <input
                className="bg-black p-2 w-full"
                onChange={onChange}
                value={value}
                type="text"
                placeholder="Add Todo"
            />
            <button onClick={onClick} className="button button-primary">
                <IoIosAdd className="text-3xl text-white" />
            </button>
        </>
    )
}

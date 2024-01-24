import { IoIosAdd } from 'react-icons/io'

type props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    onClick: () => void
    length: number
}

export const AddTodo = ({ onChange, value, onClick, length }: props) => {
    return (
        <>
            <input
                className="bg-white p-2 w-full text-black"
                onChange={onChange}
                value={value}
                maxLength={length}
                type="text"
                placeholder="Add Todo"
            />
            <button onClick={onClick} className="button button-primary">
                <IoIosAdd className="text-3xl text-white" />
            </button>
        </>
    )
}

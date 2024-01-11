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
                onChange={onChange}
                value={value}
                className="border p-2 w-full"
                type="text"
                placeholder="Add todo"
            />
            <button onClick={onClick} className="button button-primary">
                <IoIosAdd className="text-3xl text-black" />
            </button>
        </>
    )
}

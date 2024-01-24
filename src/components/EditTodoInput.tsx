type props = {
    type: string
    inputValue: string
    editEvent: React.ChangeEventHandler<HTMLInputElement>
    length: number
}

export const EditTodoInput = ({
    type,
    inputValue,
    editEvent,
    length,
}: props) => {
    return (
        <>
            <input
                className="bg-white text-black text-lg w-full"
                autoFocus={true}
                type={type}
                value={inputValue}
                maxLength={length}
                onChange={editEvent}
            />
        </>
    )
}

type props = {
    type: string
    inputValue: string
    editEvent: React.ChangeEventHandler<HTMLInputElement>
}

export const EditTodoInput = ({ type, inputValue, editEvent }: props) => {
    return (
        <>
            <input
                className="bg-white text-black"
                type={type}
                value={inputValue}
                onChange={editEvent}
            />
        </>
    )
}

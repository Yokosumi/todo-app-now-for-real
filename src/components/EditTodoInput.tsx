type props = {
    type: string
    inputValue: string
    editEvent: React.ChangeEventHandler<HTMLInputElement>
}

export const EditTodoInput = ({ type, inputValue, editEvent }: props) => {
    return (
        <>
            <input
                className="bg-white text-black w-full"
                autoFocus={true}
                type={type}
                value={inputValue}
                onChange={editEvent}
            />
        </>
    )
}

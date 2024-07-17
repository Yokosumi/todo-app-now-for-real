type props = {
    type: string
    inputValue: string
    editEvent: React.ChangeEventHandler<HTMLInputElement>
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}

export const EditTodoInput = ({
    type,
    inputValue,
    editEvent,
    onKeyDown,
}: props) => {
    return (
        <>
            <input
                className="bg-white text-black text-lg w-full"
                autoFocus={true}
                type={type}
                value={inputValue}
                onChange={editEvent}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onKeyDown(e)
                    }
                }}
            />
        </>
    )
}

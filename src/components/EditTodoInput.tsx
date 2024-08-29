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
                className="py-2 px-8 text-black  flex-grow overflow-auto break-words max-w-[12rem] md:max-w-[18rem]  lg:max-w-[20rem] focus:outline-none"
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

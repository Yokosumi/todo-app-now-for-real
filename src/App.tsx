import { useTodoHandlers } from './handlers'
import { AddTodo } from './components/AddTodo'
import { DeleteTodoButton } from './components/DeleteTodoButton'
import { EditTodoButton } from './components/EditTodoButton'
import { CheckBox } from './components/CheckBox'
import { UpdateTodoButton } from './components/UpdateTodoButton'
import { EditTodoInput } from './components/EditTodoInput'

// TODO: refactor todos so they are objects with id and text and checked properties
// TODO: add revert edit change functionality

function App() {
    const {
        todos,
        newTodo,
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
        handleUpdateTodo,
        setNewTodo,
        editing,
        editTodo,
        setEditTodo,
        editIndex,
    } = useTodoHandlers()

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <div className="flex-1 w-[40vh] min-h-[35vh] md:w-[52vh] lg:w-[72] p-4 bg-indigo-600 rounded shadow-md">
                    <h1 className="text-4xl text-center font-bold font-inter mb-4 text-white">
                        Todo List
                    </h1>
                    <div className="flex gap-3">
                        <AddTodo
                            onChange={(e) => setNewTodo(e.target.value)}
                            value={newTodo}
                            onClick={handleAddTodo}
                            onKeydown={handleAddTodo}
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="font-bold mb-2 text-2xl text-white">
                            Todos:
                        </h2>
                        <ul>
                            {todos.map((todo, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between gap-1 bg-white rounded-md p-2 mb-2"
                                >
                                    {' '}
                                    {editing && editIndex === index ? (
                                        <EditTodoInput
                                            type="text"
                                            inputValue={editTodo}
                                            editEvent={(e) =>
                                                setEditTodo(e.target.value)
                                            }
                                        />
                                    ) : (
                                        <div className="flex gap-2 text-lg">
                                            <CheckBox />
                                            <p
                                                className="py-2 px-10 text-black  overflow-auto break-words max-w-[12rem] md:max-w-[18rem]  lg:max-w-[20rem]"
                                                key={index}
                                            >
                                                {todo}
                                            </p>
                                        </div>
                                    )}
                                    {editing && editIndex === index ? (
                                        <UpdateTodoButton
                                            updateEvent={handleUpdateTodo}
                                        />
                                    ) : null}
                                    {editing ? null : (
                                        <div className="flex gap-2">
                                            <DeleteTodoButton
                                                deleteEvent={() =>
                                                    handleDeleteTodo(index)
                                                }
                                            />
                                            <EditTodoButton
                                                editEvent={() =>
                                                    handleEditTodo(index)
                                                }
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

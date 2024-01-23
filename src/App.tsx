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
                <div className="w-[80vh] h-[70vh] p-4 bg-white rounded shadow-md">
                    <h1 className="text-4xl text-center font-bold font-inter mb-4">
                        Todo List
                    </h1>
                    <div className="flex gap-3">
                        <AddTodo
                            onChange={(e) => setNewTodo(e.target.value)}
                            value={newTodo}
                            onClick={handleAddTodo}
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="font-bold mb-2">Todos:</h2>
                        <ul>
                            {todos.map((todo, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between gap-1 border p-2 mb-2"
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
                                        <p key={index}>{todo}</p>
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
                                            <CheckBox />
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

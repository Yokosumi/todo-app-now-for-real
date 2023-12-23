import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { IoIosAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'

type TodoListType = string[]
type NewTodoType = string
type EditingType = boolean
type EditTodoType = string

function App() {
    const [todos, setTodos] = useState([] as TodoListType)
    const [newTodo, setNewTodo] = useState('' as NewTodoType)
    const [editing, setEditing] = useState(false as EditingType)
    const [editTodo, setEditTodo] = useState('' as EditTodoType)

    const handleEditTodo = (todo: string) => {
        setEditing(true)
        setEditTodo(todo)
    }

    const handleUpdateTodo = () => {
        setEditing(false)
        setEditTodo('')
    }

    const handleAddTodo = () => {
        if (newTodo !== '') {
            setTodos([...todos, newTodo])
            setNewTodo('')
        }
    }

    const handleDeleteTodo = (index: number | any) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <div className="p-4 bg-white rounded shadow-md w-64">
                    <h1 className="text-2xl font-bold mb-4">Todo List</h1>
                    <div className="flex gap-3">
                        <input
                            onChange={(e) => setNewTodo(e.target.value)}
                            className="border p-2 w-full"
                            type="text"
                            placeholder="Add todo"
                        />
                        <button
                            onClick={handleAddTodo}
                            className="button button-primary"
                        >
                            <IoIosAdd className="text-3xl text-black" />
                        </button>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-bold mb-2">Todos:</h2>
                        <ul>
                            {todos.map((todo, index) => (
                                <>
                                    <div
                                        key={index}
                                        className="flex justify-around gap-1 border p-2 mb-2"
                                    >
                                        {editing && todo === editTodo ? (
                                            <textarea
                                                value={editTodo}
                                                onChange={(e) =>
                                                    setEditTodo(e.target.value)
                                                }
                                            />
                                        ) : (
                                            <p>{todo}</p>
                                        )}

                                        <button
                                            onClick={handleDeleteTodo}
                                            className="button button-primary"
                                        >
                                            <MdDelete />
                                        </button>
                                        <button
                                            onClick={() => handleEditTodo(todo)}
                                        >
                                            <MdEdit />
                                        </button>
                                        <button>
                                            {editing && todo === editTodo && (
                                                <button
                                                    onClick={handleUpdateTodo}
                                                >
                                                    <FaSave />
                                                </button>
                                            )}
                                        </button>
                                    </div>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

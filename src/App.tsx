import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { IoIosAdd } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'

//TODO: make a working edit function

type TodoListType = string[]
type NewTodoType = string
type EditingType = boolean
type editTodoType = string
type editTodoIndexType = number | null

function App() {
    const [todos, setTodos] = useState([] as TodoListType)
    const [newTodo, setNewTodo] = useState('' as NewTodoType)
    const [editing, setEditing] = useState(false as EditingType)
    const [editTodo, setEditTodo] = useState('' as editTodoType)
    const [editIndex, setEditIndex] = useState(null as editTodoIndexType)

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

    const handleEditTodo = (index: number) => {
        setEditing(true) // sets to editing mode
        setEditIndex(index) // Sets the index of the todo to be edited
        setEditTodo(todos[index]) // holds the new text of the todo
    }

    const handleUpdateTodo = () => {
        if (editTodo !== '' && editIndex !== null) {
            const newTodos = [...todos]
            newTodos[editIndex] = editTodo // puts the chosen todo via index in the editTodo state
            setTodos(newTodos) // sets the new todo list
            setEditing(false) // sets editing mode to false
            setEditIndex(null) // sets the edit index to null so it can be used again
            setEditTodo('') // sets the edit todo to empty string so it can be used again
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen ">
                <div className="p-4 bg-white rounded shadow-md w-64">
                    <h1 className="text-2xl font-bold mb-4">Todo List</h1>
                    <div className="flex gap-3">
                        <input
                            onChange={(e) => setNewTodo(e.target.value)}
                            value={newTodo}
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
                                        className="flex justify-between gap-1 border p-2 mb-2"
                                    >
                                        {' '}
                                        {editing && editIndex === index ? (
                                            <input
                                                type="text"
                                                value={editTodo}
                                                onChange={(e) =>
                                                    setEditTodo(e.target.value)
                                                }
                                            />
                                        ) : (
                                            <p>{todo}</p>
                                        )}
                                        {editing && editIndex === index ? (
                                            <button
                                                onClick={handleUpdateTodo}
                                                className="button button-primary"
                                            >
                                                <FaSave />
                                            </button>
                                        ) : null}
                                        {editing ? null : (
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleDeleteTodo}
                                                    className="button button-primary"
                                                >
                                                    <MdDelete />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleEditTodo(index)
                                                    }
                                                >
                                                    <MdEdit />
                                                </button>
                                            </div>
                                        )}
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

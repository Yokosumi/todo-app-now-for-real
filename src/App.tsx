import { useState } from 'react'
import { MdDelete } from 'react-icons/md'

type TodoListType = string[]
type NewTodoType = string

function App() {
    const [todos, setTodos] = useState([] as TodoListType)
    const [newTodo, setNewTodo] = useState('' as NewTodoType)

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
                        Add Todo
                    </button>
                    <div className="mt-4">
                        <h2 className="font-bold mb-2">Todos:</h2>
                        <ul>
                            {todos.map((todo, index) => (
                                <>
                                    <div
                                        key={index}
                                        className="flex justify-around gap-3 border p-2 mb-2"
                                    >
                                        <p>{todo}</p>
                                        <button
                                            onClick={handleDeleteTodo}
                                            className="button button-primary"
                                        >
                                            <MdDelete />
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
